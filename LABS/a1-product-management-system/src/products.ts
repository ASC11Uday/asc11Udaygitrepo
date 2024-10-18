
export interface Product{
    id:number;
    firstname:string;
    lastname:string;
    DOB: string;
    email: string;
    phone:number;
    address: string;
    degree:string;
    //?makes the property optional
    color?:string;
    storge?:string;
    registerdate:string;

}