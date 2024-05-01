import { Crud, CrudController, CrudService } from '@nestjs-library/crud';
import { Controller } from '@nestjs/common';
import { Users } from 'src/entities/Users';
import { UsersService } from './users.service';

@Crud({entity: Users})
@Controller('users')
export class UsersController implements CrudController<Users>{
    constructor(public readonly crudService: UsersService){

    }
}
