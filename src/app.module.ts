import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { AuthModule } from './auth/auth.module';
// import { User } from './user/entities/user.entity';
import { User } from './users/entities/user.entity';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    password: '@Admin123',
    username: 'postgres',
    entities: [User],
    database: 'pgwithauth',
    synchronize: true,
    logging: true,
  }),
  AuthModule,
  UsersModule,
  // AuthModule,
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
