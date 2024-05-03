import { Crud, CrudController } from '@nestjs-library/crud';
import { Controller, Get } from '@nestjs/common';
import { Standart } from '../entities/Standart';
import { StandartService } from './standart.service';

@Crud({entity: Standart})
@Controller('standart')
export class StandartController implements CrudController<Standart>{
    constructor(public readonly crudService: StandartService, public readonly standartService: StandartService){

    }

    @Get('/')
    getStandarts(){
        return this.standartService.find()
    }

    @Get('/details')
    getStandartsWithDetails(){
        return this.standartService.findWithDetails()
    }
}
