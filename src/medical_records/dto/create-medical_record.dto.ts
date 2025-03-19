import {
    IsInt,
    IsNotEmpty,
    MinLength,
  } from 'class-validator';
  
  export class CreateMedicalRecordDto {

    @IsInt()
    patient_id: number;

    @IsInt()
    doctor_id: number;

    @IsNotEmpty()
    @MinLength(1, { message: 'Diagnosis must have.' })
    diagnosis: string;

    @IsNotEmpty()
    @MinLength(1, { message: 'Diagnosis must have.' })
    treatment: string;
    
    @IsNotEmpty()
    created_at: Date;
  }