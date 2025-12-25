import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { log } from 'node:console';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {
  taskForm!: FormGroup;
  isEditMode:boolean=false;

  constructor(
    private _matDialogRef:MatDialogRef<TaskFormComponent>
  ) { }

  ngOnInit(): void {
     this.taskForm = new FormGroup({
      title: new FormControl('',[Validators.required]),
      dueDate: new FormControl('',[Validators.required]),
      priority: new FormControl('',[Validators.required]),
      status: new FormControl('',[Validators.required])
    })
  }

  onSubmit(){
    if(this.taskForm.valid){
      if(!this.isEditMode){
        // console.log(this.taskForm.value);
        let taskData=this.taskForm.value
        this._matDialogRef.close(taskData)
        
      }
    }
  }
  onClose(){
    this._matDialogRef.close()
  }

}
