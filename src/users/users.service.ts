import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
   /**
     * Here, we have used data mapper approch for this tutorial that is why we
     * injecting repository here. Another approch can be Active records.
     */
    constructor(
      // @InjectRepository(User) private userRepository: Repository<User>,
  
       @InjectRepository(User) private readonly userRepository: Repository<User>,
    ) {}
  
    /**
     * this is function is used to create User in User Entity.
     * @param createUserDto this will type of createUserDto in which
     * we have defined what are the keys we are expecting from body
     * @returns promise of user
     */
    createUser(createUserDto: CreateUserDto): Promise<User> {
      const user: User = new User();
      user.username = createUserDto.username;
      user.password = createUserDto.password;
      user.role = createUserDto.role;
      return this.userRepository.save(user);
    }
  
    /**
     * this function is used to get all the user's list
     * @returns promise of array of users
     */
    findAllUser(): Promise<User[]> {
      return this.userRepository.find();
    }
  
    /**
     * this function used to get data of use whose id is passed in parameter
     * @param id is type of number, which represent the id of user.
     * @returns promise of user
     */
    viewUser(id: number): Promise<User| null> {
      return this.userRepository.findOneBy({ id });
    }
  
    // async findOne(username: string): Promise<User | null> {
    //   return this.userRepository.findOneBy({ username });
    // }
  
    async findOne(username: string): Promise<User | null> {
      return this.userRepository.findOneBy({ username });
    }

    async findOneUsernameColumn(username: string): Promise<string | null> {
      const user = await this.userRepository.findOne({
        where: { username },
        select: ['role'],  // Replace 'email' with the name of the column you want
      });
    
      return user ? user.role : null; // or return the column you selected
    }
    
  
    /**
     * this function is used to updated specific user whose id is passed in
     * parameter along with passed updated data
     * @param id is type of number, which represent the id of user.
     * @param updateUserDto this is partial type of createUserDto.
     * @returns promise of udpate user
     */
    updateUser(id: number, updateUserDto: UpdateUserDto): Promise<User> {
      const user: User = new User();
      user.username = updateUserDto.username || '';
      user.password = updateUserDto.password || '';
      user.id = id;
      return this.userRepository.save(user);
    }
  
    /**
     * this function is used to remove or delete user from database.
     * @param id is the type of number, which represent id of user
     * @returns nuber of rows deleted or affected
     */
    removeUser(id: number): Promise<{ affected?: number| null }> {
      return this.userRepository.delete(id);
    }
}
