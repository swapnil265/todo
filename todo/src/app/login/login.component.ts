
import {HardCodedAuthenticationService} from './../service/hard-coded-authentication.service'
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username ='swapnil'
  password =''
  errorMessage = "Invalid login"
  invalidLogin =false

  constructor(private router: Router, private hardCodedAuthenticationService : HardCodedAuthenticationService) { }

  ngOnInit() {
  }

  handleLogin(){

if(this.hardCodedAuthenticationService.authenticate(this.username,this.password)){
  this.router.navigate(['welcome', this.username])
  this.invalidLogin = false
}
 else
    {
      this.invalidLogin = true;
    }
  
    console.log(this.username);
  }


}
