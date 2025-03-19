import { Injectable } from '@nestjs/common';
import { CreatePatientDto } from './dto/create-patient.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Patient } from './entities/patient.entity';

@Injectable()
export class PatientsService {
   /**
     * Here, we have used data mapper approch for this tutorial that is why we
     * injecting repository here. Another approch can be Active records.
     */
    constructor(
  
       @InjectRepository(Patient) private readonly patientRepository: Repository<Patient>,
    ) {}
  
    /**
     * this is function is used to create User in User Entity.
     * @param createUserDto this will type of createUserDto in which
     * we have defined what are the keys we are expecting from body
     * @returns promise of user
     */
    createUser(createPatientDto: CreatePatientDto): Promise<Patient> {
      const patient: Patient = new Patient();
      patient.name = createPatientDto.name;
      patient.date_of_birth = createPatientDto.date_of_birth;
      return this.patientRepository.save(patient);
    }
  
    /**
     * this function is used to get all the user's list
     * @returns promise of array of users
     */
    findAllUser(): Promise<Patient[]> {
      return this.patientRepository.find();
    }
  
    /**
     * this function used to get data of use whose id is passed in parameter
     * @param id is type of number, which represent the id of user.
     * @returns promise of user
     */
    viewUser(id: number): Promise<Patient| null> {
      return this.patientRepository.findOneBy({ id });
    }
  
    async findOne(name: string): Promise<Patient | null> {
      return this.patientRepository.findOneBy({ name });
    }
}