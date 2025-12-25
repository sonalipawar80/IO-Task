import { Component, OnInit, ViewChild } from '@angular/core';
import { TodoServiceService } from '../../services/todo-service.service';
import { Ipost } from 'src/app/pipe-task/const';
import { Itodo } from '../../const';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { log } from 'node:console';

@Component({
  selector: 'app-todoservice-task',
  templateUrl: './todoservice-task.component.html',
  styleUrls: ['./todoservice-task.component.scss']
})
export class TodoserviceTaskComponent implements OnInit {
todoform!:FormGroup;
  todoData!: Itodo[];
  isEditMood:boolean=false;
  constructor(
    private _todoService: TodoServiceService
  ) { }

  ngOnInit(): void {
    this.formcreate();
    this.fetchData();
  }

  formcreate(){
      this.todoform=new FormGroup({
        'title':new FormControl(null,[Validators.required]),
        'completed':new FormControl(null,[Validators.required])
      })
  }

  fetchData() {
    this._todoService.fetchtodoData().subscribe({
      next: res => {
        console.log(res);
        this.todoData = res;
      },
      error: err => {
        console.log(err);

      }
    })
  }



  onsubmit(){
   if(this.todoform.valid){
    console.log(this.todoform.value);
    
    if(!this.isEditMood){
      let newData=this.todoform.value;
      this._todoService.posttodoData(newData).subscribe({
        next:res=>{
          console.log(res);
          
        },
        error:err=>{
          console.log(err);
          
        }
      })
    }else{
      let updetedData=this.todoform.value
    }
   }

  }

}
