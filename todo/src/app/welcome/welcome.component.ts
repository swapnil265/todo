import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  name = ''
  welcomeMessageFromService :string

  constructor(
    private route:ActivatedRoute,
    private service:WelcomeDataService
    ) { }

  ngOnInit() {
    this.name = this.route.snapshot.params['name'];
  // console.log( this.route.snapshot.params['name'])
  }
  getWelcomeMessage(){
  this.service.executeHelloWorldBeanService().subscribe(
  response => this.handleSuccessfulResponse(response),
  error => this.handleErrorResponse(error))
   // console.log("hello swapnil how are you?")
  };

  getWelcomeMessageWithParameter() {
    this.service.executeHelloWorldBeanServiceWithPathVariablle(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error))
    };

  handleSuccessfulResponse(response){
    this.welcomeMessageFromService = response.message
  }

  handleErrorResponse(error){
    // console.log(error);
    // console.log(error.error.message);
    // console.log(error.error.message);

    this.welcomeMessageFromService=error.error.message;
  }
}
