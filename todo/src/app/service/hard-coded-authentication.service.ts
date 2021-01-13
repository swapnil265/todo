import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardCodedAuthenticationService {

  constructor() { }

  authenticate(username,password){
    if (username==='swapnil'&& password ==='123'){
      sessionStorage.setItem('authenticaterUser',username)
      return true;
    }
    else{
      return false;
    }
  }
  isUserLoggedIn(){
    let user =sessionStorage.getItem('authenticaterUser')
    return !(user ===null)
  }
}
