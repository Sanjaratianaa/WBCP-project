import { Crud, CrudController, CrudService } from '@nestjs-library/crud';
import { Controller, Get } from '@nestjs/common';
import { Users } from './Users';
import { UsersService } from './users.service';

@Crud({entity: Users})
@Controller('users')
export class UsersController implements CrudController<Users>{
    constructor(public readonly crudService: UsersService, public readonly userService: UsersService){

    }

    @Get('/fabien')
    getUsers(){
        return this.userService.find()
    }
}
