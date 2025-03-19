import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MedicalRecord } from './entities/medical_record.entity';
import { CreateMedicalRecordDto } from './dto/create-medical_record.dto';

@Injectable()
export class MedicalRecordsService {
   /**
     * Here, we have used data mapper approch for this tutorial that is why we
     * injecting repository here. Another approch can be Active records.
     */
    constructor(
  
       @InjectRepository(MedicalRecord) private readonly medicalRecordRepository: Repository<MedicalRecord>,
    ) {}
  
    /**
     * this is function is used to create User in User Entity.
     * @param createUserDto this will type of createUserDto in which
     * we have defined what are the keys we are expecting from body
     * @returns promise of user (id, patient_id, doctor_id, diagnosis, treatment, created_at
     */
    createUser(createMedicalRecordDto: CreateMedicalRecordDto): Promise<MedicalRecord> {
      const medicalRecord: MedicalRecord = new MedicalRecord();
      medicalRecord.patient_id = createMedicalRecordDto.patient_id;
      medicalRecord.doctor_id = createMedicalRecordDto.doctor_id;
      medicalRecord.diagnosis = createMedicalRecordDto.diagnosis;
      medicalRecord.treatment = createMedicalRecordDto.treatment;
      medicalRecord.created_at = createMedicalRecordDto.created_at;
      return this.medicalRecordRepository.save(medicalRecord);
    }
  
    /**
     * this function is used to get all the user's list
     * @returns promise of array of users
     */
    findAllUser(): Promise<MedicalRecord[]> {
      return this.medicalRecordRepository.find();
    }
  
    /**
     * this function used to get data of use whose id is passed in parameter
     * @param id is type of number, which represent the id of user.
     * @returns promise of user
     */
    viewUser(id: number): Promise<MedicalRecord| null> {
      return this.medicalRecordRepository.findOneBy({ id });
    }

    /**
   * This function is used to get all the medical records by doctor_id.
   * @param doctorId the id of the doctor
   * @returns promise of array of medical records
   */
  findByDoctorId(doctorId: number): Promise<MedicalRecord[]> {
    return this.medicalRecordRepository.find({
      where: { doctor_id: doctorId },
    });
  }
}