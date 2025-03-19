import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PatientsService } from './patients.service';
import { CreatePatientDto } from './dto/create-patient.dto';

@Controller('patients')
export class PatientsController {
  constructor(private readonly patientsService: PatientsService) {}

  /**
     * Post decorator represents method of request as we have used post decorator the method
     * of this API will be post.
     * so the API URL to create User will be
     * POST http://localhost:3000/patients
     */
    @Post()
    create(@Body() createPatientDto: CreatePatientDto) {
      return this.patientsService.createUser(createPatientDto);
    }
  
    /**
     * we have used get decorator to get all the user's list
     * so the API URL will be
     * GET http://localhost:3000/patients
     */
    @Get()
    findAll() {
      return this.patientsService.findAllUser();
    }
  
    /**
     * we have used get decorator with id param to get id from request
     * so the API URL will be
     * GET http://localhost:3000/patients/:id
     */
    @Get(':id')
    findOne(@Param('id') id: string) {
      return this.patientsService.viewUser(+id);
    }
}