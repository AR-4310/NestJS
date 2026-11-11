import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity.js';
import { CreateUserDto } from './dto/create-user.dto.js';
import { UpdateUserDto } from './dto/update-user.dto.js';

@Injectable()
export class UserService {
constructor(
@InjectRepository(User)
private readonly userRepo : Repository<User>){}

async addUser(d : CreateUserDto): Promise<User>{
    try{
    const res = this.userRepo.create(d);
    return await this.userRepo.save(res);
    }catch{
        throw new BadRequestException(`User not found`);
    }
}

async getAllUsers():Promise<User[]>{
    return await this.userRepo.find();
}

async getUserById(id: string): Promise<User> {
    const res = await this.userRepo.findOne({
        where: {id},
    })
    if(res){
        return res;
    }else{
        throw new NotFoundException(`User ${id} not found`)
    }
   }

async updateUser(id: string, d: UpdateUserDto) {
        const res = await this.userRepo.findOne({
            where : {id},
        })
    if(res){
        const p = await this.userRepo.update(id,d)
        if(p.affected!=null && p.affected>0 ){
            return `User id ${id} updated!`;
        }else{
            return `User id ${id} failed to update`
        }
    }else{
        return `User id ${id} not found`;
    }
}

async deleteUser(id:string){
    const res = await this.userRepo.findOne({
        where : {id},
    })
    if(res){
        await this.userRepo.remove(res);
        return `User id ${id} deleted!`;
    }else{
        return `User id ${id} not found`;
    }
}
}
