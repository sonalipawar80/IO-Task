import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { log } from 'console';
import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IStd } from '../const';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit,OnChanges {
stdForm!:FormGroup;
editedMode:Boolean=false;
@Input() editedObj!:IStd |undefined;
@Output() emitstdobj:EventEmitter<any>=new EventEmitter()
@Output() updatedObj:EventEmitter<IStd>=new EventEmitter;
constructor( private fb:FormBuilder) { }


 uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
      /[xy]/g,
      function (c) {
        var r = (Math.random() * 16) | 0,
          v = c == 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      }
    );
  }


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
      value.id=this.uuid
      this.emitstdobj.emit(value)
      this.stdForm.reset()
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
  //   if (changes['editedObj'].currentValue) {
  //       this.editedMode=true;
  //     this.stdForm.patchValue(changes['editedObj'].currentValue);
  // }
 

      if (changes['editedObj'] && this.editedObj) {
        this.editedMode=true;
      this.stdForm.patchValue(this.editedObj);
  }
}

onUpdate(){
  if(this.stdForm.valid){
    let updtaedValu={
      id:this.editedObj?.id,
      ...this.stdForm.value
    }

    this.updatedObj.emit(updtaedValu)
    console.log(updtaedValu)
    this.stdForm.reset()
    
  }
}
}
