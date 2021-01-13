import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


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
    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world/path-variable/${name}`);
    //console.log("execute the hello world welcome service executed")
  }
}
