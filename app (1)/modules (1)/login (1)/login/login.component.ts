import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService : AuthServiceService,private router:Router) { }

  ngOnInit(): void {
  }

  onLogin(loginForm:NgForm){
    console.log(loginForm.value)

    const token = this.authService.authUser(loginForm.value)
    if(token){
      localStorage.setItem('token',token.password)
      alert("login successfully")
      console.log("login success")
      this.router.navigate(['/'])
    }
    else{
      console.log("login unsucces")
      alert("Username or Password is incorrect")
    }
  }

}
