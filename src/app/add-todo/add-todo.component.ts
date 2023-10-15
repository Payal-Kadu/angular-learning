import { Todo } from './../Todo';
import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  title:string;
  desc:string;

  @Output() todoadd : EventEmitter<Todo> = new EventEmitter();

  onSubmit(){
    const todo = {
      sno:8,
      title:this.title,
      desc:this.desc,
      active:true
    }
   this.todoadd.emit(todo);
  }

}
