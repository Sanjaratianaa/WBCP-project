import { Crud, CrudController } from '@nestjs-library/crud';
import { Controller } from '@nestjs/common';
import { Standart } from 'src/entities/Standart';
import { StandartService } from './standart.service';

@Crud({entity: Standart})
@Controller('standart')
export class StandartController implements CrudController<Standart>{
    constructor(public readonly crudService: StandartService){

    }
}
