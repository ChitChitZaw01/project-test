import {
    IsAlphanumeric,
    IsNotEmpty,
    MinLength,
  } from 'class-validator';
  
  export class CreatePatientDto {

    @IsNotEmpty()
    @MinLength(1, { message: 'name must have.' })
    @IsAlphanumeric(undefined, {
      message: 'name does not allow other than alpha numeric chars.',
    })
    name: string;
    
    @IsNotEmpty()
    @MinLength(1, { message: 'Birth must have.' })
    date_of_birth: Date;

}