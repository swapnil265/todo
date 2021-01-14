import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { ListToDosComponent } from './list-to-dos/list-to-dos.component';
import { TodoComponent } from './todo/todo.component';


const routes: Routes = [
  {path:'login' , component: LoginComponent},
  {path:'welcome/:name',component:WelcomeComponent},
  {path:'listToDos',component:ListToDosComponent},
  {path: 'todos/:id', component: TodoComponent},
  {path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
