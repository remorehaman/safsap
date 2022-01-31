import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{environment} from '../../environments/environment';
import { Usermodel } from '../model/usermodel.model';

@Injectable({
  providedIn: 'root'
})
export class UserService{
  constructor(private httpClient: HttpClient){}

  siteUrl = environment.siteUrl;

  adduser(user){
    return this.httpClient.post(this.siteUrl+'frontapi/data/cookersignupprocess',user);
  }

  addUsers(userMama:Usermodel){
    let multipleUsers:  any[];
    if(localStorage.getItem("userSam")){
      multipleUsers = JSON.parse(localStorage.getItem("userSam")!) 
      multipleUsers =[userMama,...multipleUsers]
    }
    else{
      multipleUsers = [userMama]
    }
    localStorage.setItem("userSam",JSON.stringify(multipleUsers))
  }

}