import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

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
  message:string
   



  constructor(private todoService: TodoDataService, private router: Router) { }
  
  ngOnInit() {
  this.refreshTodo();
    
    }


  deleteToDo(id){
    console.log(`delete to do ${id}`)
    this.todoService.deleteToDo('swapnil',id).subscribe(
      response=>{console.log(response)
      this.message = `delete of ${id} successful`
        this.refreshTodo();
      }
    )
  }

  refreshTodo(){
this.todoService.retrieveAllTodos('swapnil').subscribe(
  response => {
    console.log(response);
    this.todos = response;
  }
)
}

updateToDo(id){
  console.log(`update ${id}`)
  this.router.navigate(['todos',id])

}
  addToDo() {
    this.router.navigate(['todos', -1])
  }

  


}