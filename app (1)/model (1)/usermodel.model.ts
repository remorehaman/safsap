import { FormGroup, FormBuilder, Validators } from '@angular/forms';


export class Usermodel {
    // userId: number;
    usertype: string;
    name:string;
    email:string;
    password:string;
    confirmpassword:string;
    status:string;
    formGroup: FormGroup ;
    submitted = false;

    

    constructor(){
        var fb = new FormBuilder();
        this.formGroup = fb.group({
            'usertypeControl': ['',[Validators.required]],
            'nameControl': ['',[Validators.required,Validators.pattern('^[a-zA-Z0-9 ]*$')]],
            'emailControl': ['',[Validators.required,Validators.email]],
            'passwordControl': ['',[Validators.required,Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]],
            'confirmpasswordControl': ['',[Validators.required]],
        },{validators: MustMatch('passwordControl','confirmpasswordControl')});
    }
    
}

export class loginusers {
    email:string;
    password: string;
    formGroup: FormGroup;
    constructor(){
        var fb = new FormBuilder();
        this.formGroup = fb.group({
            'emailControl': ['',[Validators.required,Validators.email]],
            'passwordControl': ['',[Validators.required]],
            
        });
    }
}


export function MustMatch(controlName: string, matchingControlName: string){
    return (formGroup:FormGroup)=>{
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            
            return;
        }
        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
}
