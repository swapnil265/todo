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
  invalidLogin =true

  constructor(private router: Router) { }

  ngOnInit() {
  }

  handleLogin(){
    if (this.username ==='swapnil' && this.password ==='123'){
      this.router.navigate(['welcome',this.username])
      this.invalidLogin=false
    }
    else
    {
      this.invalidLogin = true;
    }
  
    console.log(this.username);
  }


}
