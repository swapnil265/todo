import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'


export class HelloWorldBean {
  constructor(public message: string) { }
}

@Injectable({
  providedIn: 'root'
})



export class WelcomeDataService {



  constructor(
    private http:HttpClient
  ) { }
  executeHelloWorldBeanService(){
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-Bean');
    //console.log("execute the hello world welcome service executed")
  }

  //http://localhost:8080/hello-world/path-variable/{swapnil}


  executeHelloWorldBeanServiceWithPathVariablle(name) {
    let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();
    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    })
    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world/path-variable/${name}`,{headers});
    //console.log("execute the hello world welcome service executed")
  }

  createBasicAuthenticationHttpHeader(){
    let username ='swapnil'
    let password ='123'
    let basicAuthHeaderString ='Basic ' + window.btoa(username + ':'+ password)
    return basicAuthHeaderString;
  }
}
