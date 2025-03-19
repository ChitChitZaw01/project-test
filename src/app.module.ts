import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { PatientsModule } from './patients/patients.module';
import { Patient } from './patients/entities/patient.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    password: '@Admin123',
    username: 'postgres',
    entities: [User, Patient],
    database: 'pgwithauth',
    synchronize: true,
    logging: true,
  }),
  AuthModule,
  UsersModule,
  PatientsModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
