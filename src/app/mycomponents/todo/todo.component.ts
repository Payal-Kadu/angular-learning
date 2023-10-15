import { Component } from '@angular/core';
import { Todo } from '../../Todo';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
    localItem : string | null;

    todos:Todo[];
    constructor(){
        this.localItem = localStorage.getItem("todos");

        if(this.localItem==null){
            this.todos=[];
        }else{
            this.todos = JSON.parse(this.localItem);
        }
    
  
    }

    delete_function(todo: Todo){
        const index = this.todos.indexOf(todo);
        console.log(index);
        this.todos.splice(index, 1);
        event?.preventDefault();
        localStorage.setItem("todos",JSON.stringify(this.todos));
    }

    add_function(todo: Todo){
        console.log("add todo ");
        this.todos.push(todo);
        localStorage.setItem("todos",JSON.stringify(this.todos));
    }
}
