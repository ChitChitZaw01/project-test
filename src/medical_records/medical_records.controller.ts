import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MedicalRecordsService } from './medical_records.service';
import { CreateMedicalRecordDto } from './dto/create-medical_record.dto';
import { UpdateMedicalRecordDto } from './dto/update-medical_record.dto';

@Controller('medical-records')
export class MedicalRecordsController {
  constructor(private readonly medicalRecordsService: MedicalRecordsService) {}

  /**
     * Post decorator represents method of request as we have used post decorator the method
     * of this API will be post.
     * so the API URL to create User will be
     * POST http://localhost:3000/medical-records
     */
    @Post()
    create(@Body() createMedicalRecordDto: CreateMedicalRecordDto) {
      return this.medicalRecordsService.createUser(createMedicalRecordDto);
    }
  
    /**
     * we have used get decorator to get all the user's list
     * so the API URL will be
     * GET http://localhost:3000/medical-records
     */
    @Get()
    findAll() {
      return this.medicalRecordsService.findAllUser();
    }
  
    /**
     * we have used get decorator with id param to get id from request
     * so the API URL will be
     * GET http://localhost:3000/medical-records/:id
     */
    @Get(':id')
    findOne(@Param('id') id: string) {
      return this.medicalRecordsService.viewUser(+id);
    }
}