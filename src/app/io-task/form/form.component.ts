import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { log } from 'console';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
stdForm!:FormGroup;

@Output() emitstdobj:EventEmitter<any>=new EventEmitter()
constructor( private fb:FormBuilder) { }

  ngOnInit(): void {
    this.stdForm=this.fb.group({
      fname:['',[Validators.required]],
      lname:['',[Validators.required]],
      email:['',[Validators.required]],
      contact:['',[Validators.required]]
    })

  }


  onSubmite(){
    if(this.stdForm.valid){
      console.log(this.stdForm.value)
      let value=this.stdForm.value;
      this.emitstdobj.emit(value)
      this.stdForm.reset()
    }
  }
}
