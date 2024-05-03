import { Crud, CrudController } from '@nestjs-library/crud';
import { Controller, Get } from '@nestjs/common';
import { DetailsUserService } from './details-user.service';
import { DetailsUser } from '../entities/DetailsUser';

@Crud({ entity: DetailsUser })
@Controller('details-user')
export class DetailsUserController implements CrudController<DetailsUser> {
    constructor(public readonly crudService: DetailsUserService, private readonly detailsUserService: DetailsUserService) {}

    @Get('/')
    async getUsers(): Promise<DetailsUser[]> {
        const userId = 1; // Assuming you want to retrieve details for user with ID 1
        return await this.detailsUserService.getAllDetailsByUserId(userId);
    }
}
