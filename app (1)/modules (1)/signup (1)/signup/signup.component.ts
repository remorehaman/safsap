//import { isNull } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { from } from 'rxjs';
import { Usermodel } from 'src/app/model/usermodel.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  userType: string = 'cooker';
  userlist = ["Customer","Cooker","Deliveryman"];
  Usermodel:Usermodel = new Usermodel();
  //formGroup: FormGroup ;
  submitted: false;
  addSuccess= false;
  loadingLargeGroup = false;
  loggedinUser: any = {};
  userMama : any = {};

  title:string;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router
    ) {}
 
  ngOnInit(): void {
    if(this.route.snapshot.params['usertype'])
    {
      this.userType = this.route.snapshot.params['usertype'];
      this.route.params.subscribe((params:Params)=>{
      this.userType = params['usertype'];
      });
    }
   
  }


  createuser(){
    if (this.Usermodel.formGroup.valid)
    {
      //this.submitted = true;
      /*var groupInputDTO:any = {};
      groupInputDTO.name = this.Usermodel.name;
      groupInputDTO.email = this.Usermodel.email;
      groupInputDTO.usertype = this.Usermodel.usertype;
      groupInputDTO.password = this.Usermodel.password;
      groupInputDTO.confirmpassword = this.Usermodel.confirmpassword;
      //groupInput.tc=this.Usermodel.tc;
      groupInputDTO.status = 'Y';
      console.log(groupInputDTO);*/
      var formData= new FormData();
      formData.append('name',this.Usermodel.name);
      formData.append('email',this.Usermodel.email);
      formData.append('usertype',this.Usermodel.usertype);
      formData.append('password',this.Usermodel.password);
      formData.append('confirmpassword',this.Usermodel.confirmpassword);
      formData.append('status',this.Usermodel.status);

      this.userService.adduser(formData).subscribe(res=>{
        console.log("sa->",res);
        this.userMama = Object.assign(this.userMama,res)
        this.userService.addUsers( this.userMama)

        this.Usermodel = new Usermodel();
        this.submitted = false;
        this.addSuccess = true;
      });
      //this.router.navigate(['/login'])
    }else{
      console.log('form not valid');
    }

  }

  

  
}
