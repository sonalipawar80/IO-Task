import { Component, OnInit, ViewChild } from '@angular/core';
import { TodoServiceService } from '../../services/todo-service.service';
import { Ipost } from 'src/app/pipe-task/const';
import { Itodo } from '../../const';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todoservice-task',
  templateUrl: './todoservice-task.component.html',
  styleUrls: ['./todoservice-task.component.scss']
})
export class TodoserviceTaskComponent implements OnInit {
 @ViewChild('todoForm') todoForm!: NgForm;
  todoData!: Itodo[];
  editMode: boolean = false;
  editedId!: string;
  constructor(
    private todoserv: TodoServiceService
  ) { }

  ngOnInit(): void {
    this.todoserv.fetchAllTodos().subscribe(res => {
      this.todoData = res
    })
  }

  onSubmit(){
    if(this.todoForm.valid){
      let newTodo={ ...this.todoForm,id:this.todoserv.uuid()}
      console.log(newTodo)
    }
  }
update(){
  
}
  // onadd() {
  //   if (this.todoForm.length > 0) {
  //     if (!this.editMode) {
  //       console.log('not add mode')
  //       console.log(this.todoForm)
  //       let newTodo = {
  //         id: this.todoserv.uuid(),
  //         title: this.todoForm
  //       }
  //       this.todoForm = ''
  //       this.todoserv.addTodo(newTodo);
  //     } else {

  //       let updatedTodo = {
  //         id: this.editedId,
  //         title: this.todoForm
  //       }
  //       this.todoserv.update(updatedTodo)
  //       this.todoForm = ''
  //       console.log(updatedTodo)
  //     }
  //   }
  // }

  onedit(editedTod: Itodo) {
    this.editedId = editedTod.id
    this.editMode = true
    // this.todoForm = editedTod.title
  }

  onremove(todoId:string){
    this.todoserv.remove(todoId)
  }

}
