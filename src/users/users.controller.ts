import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  /**
     * Post decorator represents method of request as we have used post decorator the method
     * of this API will be post.
     * so the API URL to create User will be
     * POST http://localhost:3000/users
     */
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);
  }

  /**
   * we have used get decorator to get all the user's list
   * so the API URL will be
   * GET http://localhost:3000/users
   */
  @Get()
  findAll() {
    return this.usersService.findAllUser();
  }

  /**
   * we have used get decorator with id param to get id from request
   * so the API URL will be
   * GET http://localhost:3000/users/:id
   */
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.viewUser(+id);
  }

  /**
* Endpoint to get the role of a specific user by their username
* @param username the username of the user
* @returns the role of the user
*/
  @Get('role/:username')  // Define the route for this action
  async findRoleByUsername(@Param('username') username: string): Promise<string | null> {
    return await this.usersService.findOneUsernameColumn(username);
  }

  /**
   * we have used patch decorator with id param to get id from request
   * so the API URL will be
   * PATCH http://localhost:3000/users/:id
   */
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.updateUser(+id, updateUserDto);
  }

  /**
   * we have used Delete decorator with id param to get id from request
   * so the API URL will be
   * DELETE http://localhost:3000/users/:id
   */
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.removeUser(+id);
  }
}
