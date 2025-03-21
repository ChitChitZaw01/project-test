import {
    IsAlphanumeric,
    IsNotEmpty,
    Matches,
    MinLength,
  } from 'class-validator';
  
  const passwordRegEx =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,20}$/;
  
  export class CreateUserDto {

    @IsNotEmpty()
    @MinLength(1, { message: 'Username must have atleast 3 characters.' })
    @IsAlphanumeric(undefined, {
      message: 'Username does not allow other than alpha numeric chars.',
    })
    username: string;
  
    @IsNotEmpty()
    @Matches(passwordRegEx, {
      message: `Password must contain Minimum 8 and maximum 20 characters, 
      at least one uppercase letter, 
      one lowercase letter, 
      one number and 
      one special character`,
    })
    password: string;

    @IsNotEmpty()
    @MinLength(1, { message: 'Role must have.' })
    @IsAlphanumeric(undefined, {
      message: 'Role does not allow other than alpha numeric chars.',
    })
    role: string;
  }