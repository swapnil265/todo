import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../list-to-dos/list-to-dos.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  id:number
  todo:Todo
  constructor(
    private todoService:TodoDataService,
    private route:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.todo = new Todo(this.id,'',false,new Date)

    if (this.id !=-1){
    this.todoService.retrieveToDo('swapnil',this.id)
    .subscribe(
      data => this.todo = data
    )
  }
  }


  saveToDo(){
    if (this.id != -1) {
      //createTodo
      this.todoService.createToDo('swapnil',this.todo).subscribe(
        data=> { 
          console.log(data)
          this.router.navigate(['listToDos'])
        }
      )
    }
    else{
    this.todoService.updateToDo('swapnil',this.id,this.todo)
    .subscribe(
      data=>{
        console.log(data)
        this.router.navigate(['listToDos'])
      }
    )
  }}


}
