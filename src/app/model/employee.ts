export class employeeModel{
    empId:number | null;
    name! : string;
    email! : string;
    contactNo! : string;
    city! : string;
    state! : string;
    address! : string;
    pinCode! : string;

    constructor(){
        this.empId=null;
        this.name="";
        this.email="";
        this.contactNo="";
        this.city="";
        this.state="";
        this.pinCode="";
        this.address="";
    }

}