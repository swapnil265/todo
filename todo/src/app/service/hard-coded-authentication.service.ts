import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardCodedAuthenticationService {

  constructor() { }

  authenticate(username,password){
    if (username==='swapnil'&& password ==='123'){
      return true;
    }
    else{
      return false;
    }
  }
}
