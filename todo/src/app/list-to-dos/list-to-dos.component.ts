import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';

export class Todo{
  constructor(
    public id :number,
    public description:string ,
    public done:boolean,
    public targetDate: Date
  ){}



}

@Component({
  selector: 'app-list-to-dos',
  templateUrl: './list-to-dos.component.html',
  styleUrls: ['./list-to-dos.component.css']
})
export class ListToDosComponent implements OnInit {
  
  todos: Todo[]
   



  constructor(private todoService: TodoDataService) { }
  
  ngOnInit() {
  
    this.todoService.retrieveAllTodos('swapnil').subscribe(
    response=> {
    console.log(response);
      this.todos = response;
    }
  )
    }

}
