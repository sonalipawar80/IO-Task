import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServTaskService } from '../serv-task.service';
import { IStdServ } from '../const';
import { SharedModuleService } from 'src/app/shared-module/shared-module.service';

@Component({
  selector: 'app-serv-form',
  templateUrl: './serv-form.component.html',
  styleUrls: ['./serv-form.component.scss']
})
export class ServFormComponent implements OnInit {
  stdForm!: FormGroup;
  isEditMode: Boolean = false;
  editData!: IStdServ
  stdDataInput!: IStdServ[]
  constructor(private fb: FormBuilder,
    private _stdServ: ServTaskService,
    private _shareMatDialog: SharedModuleService
  ) { }

  ngOnInit(): void {
    this.getStdData()
    this.formCreate()
  }

  onSubmite() {
    if (this.stdForm.valid) {
      if (!this.isEditMode) {
        console.log(this.stdForm.value)
        let value = this.stdForm.value;
        this._stdServ.postData(value).subscribe({
          next: (res) => {
            this.stdForm.reset()
            console.log('submit', value)
            this.getStdData()
          },
          error: () => {
            console.log('error')
          }
        })
      } else {
        let value = this.stdForm.value;
        this._stdServ.updateData(this.editData.id, value).subscribe({
          next: (res) => {
            console.log('updated ho gaya hai', res)
            this.getStdData()
            this.stdForm.reset()
          }
        })
      }
    }
  }

  formCreate() {
    this.stdForm = this.fb.group({
      fname: ['', [Validators.required]],
      lname: ['', [Validators.required]],
      email: ['', [Validators.required]],
       contact: ['', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10)
    ]],
    })
  }
  
  // -------------------------List Section--------------
  getStdData() {
    this._stdServ.fetchAllData()
      .subscribe({
        next: (res) => {
          this.stdDataInput = res;
          console.log('fetch', res)
        }
      })
  }


  onclickEdit(stdData: string) {
    this._stdServ.getSingleStd(stdData).subscribe({
      next: (res) => {
        // console.log('here are get Data single',res)
        this.stdForm.patchValue(res)
        this.isEditMode = true
        this.editData = res
      }
    })

  }

  onclickRemove(stdId: string) {
    this._shareMatDialog.confirm('Are you sure, want to delete the Student')
      .subscribe((res: Boolean) => {
        console.log('afterCloseres:', res)
        if (res) {
          this._stdServ.removeData(stdId).subscribe(res => {
            this.getStdData()
          })
        }
      })
    }
  }
