import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }

  UserArray : any[]
  authUser(userMama:any){
   
    if(localStorage.getItem("userSam")){
      this.UserArray = JSON.parse(localStorage.getItem("userSam")!) 
    }
    return this.UserArray?.find(p => p.email === userMama.email  && p.password === userMama.password)
  }
}
