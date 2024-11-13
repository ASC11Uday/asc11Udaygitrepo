// export class User {
//   id?: number;
//   name?: string;
//   phoneNumber?: string;
//   location?: string;
//   gender?: string;
//   salary?: number;
//   age?: number;
// }

// export interface User {
//   id?: number;
//   name?: string;
//   phoneNumber?: string;
//   email: string;  
// }
export interface User {
  id?: number;  // Optional field since it's auto-generated
  name: string;
  email: string;
  phoneNumber: string;
  password: string;  // Ensure this is present in your model
  location?: string;
  gender?: string;
  salary?: number;
  age?: number;
}
