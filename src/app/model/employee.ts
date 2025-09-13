export class employeeModel{
    emp_id!:number;
    name! : string;
    email! : string;
    contactNo! : string;
    city! : string;
    state! : string;
    address! : string;
    pinCode! : string;

    constructor(){
        this.emp_id=0;
        this.name="";
        this.email="";
        this.contactNo="";
        this.city="";
        this.state="";
        this.pinCode="";
        this.address="";
    }

}