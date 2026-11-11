import { Controller,Post,Body,Get,Param,Patch, ParseIntPipe, Delete } from '@nestjs/common';
import { UserService } from './user.service.js';
import { CreateUserDto } from './dto/create-user.dto.js';
import { UpdateUserDto } from './dto/update-user.dto.js';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post(`create-user`)
  async addUser(@Body() d : CreateUserDto){
    return await this.userService.addUser(d);
  }

  @Get('get-user/all')
  async getAllUsers(){
    return await this.userService.getAllUsers();
  }

  @Get('get-user/:id')
   async getUserById(@Param('id', ParseIntPipe) id: string){
    return await this.userService.getUserById(id);
  }
  
  @Patch('update-user/:id')
  async updateUser(@Param('id') id: string, @Body() d: UpdateUserDto) {
  return await this.userService.updateUser(id, d);
  }

  @Delete('delete-user/:id')
  async deleteUser(@Param('id') id: string) {
    return await this.userService.deleteUser(id);
  }
}
