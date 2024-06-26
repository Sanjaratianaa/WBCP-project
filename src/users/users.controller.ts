import { Crud, CrudController, CrudService } from '@nestjs-library/crud';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Users } from '../entities/Users';
import { UsersService } from './users.service';

@Crud({entity: Users})
@Controller('users')
export class UsersController implements CrudController<Users>{
    constructor(public readonly crudService: UsersService, public readonly userService: UsersService){

    }

    @Get('/')
    getUsers(){
        return this.userService.find()
    }

    @Post()
    save(@Body() user: Users){
        this.userService.addUser(user)
    }

    @Get("/:id")
    async getUser(@Param("id") id: string){
        console.log(id)
        return await this.userService.getUser(id)
    }
    
    @Post('/login')
    async login(@Body() user: Users){
        try{
            return {
                status: 200,
                data: await this.userService.login(user)
            };
        }catch(e){
            console.log(e);
            return {
                status: 500,
                data: e.detail
            }
        }
    }

    @Post('/sign')
    async sign(@Body() user: Users){
        try{
            return {
                status: 200,
                data: await this.userService.signin(user)
            };
        }catch(e){
            return {
                status: 500,
                data: e.detail
            }
        }
    }
}

