import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Player } from '../../const';
import { SharedModuleService } from 'src/app/shared-module/shared-module.service';
import { CricketerservService } from '../cricketerserv.service';

@Component({
  selector: 'app-cricketerdashboard',
  templateUrl: './cricketerdashboard.component.html',
  styleUrls: ['./cricketerdashboard.component.scss']
})
export class CricketerdashboardComponent implements OnInit {
stdForm!: FormGroup;
  isEditMode: Boolean = false;
  editData!: Player
  stdDataInput!: Player[]
  constructor(private fb: FormBuilder,
    private _shareMatDialog: SharedModuleService,
    private _playerserv:CricketerservService
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
        this._playerserv.postData(value).subscribe({
          next: () => {
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
        this.isEditMode=false
        this._playerserv.updateData(this.editData.id, value).subscribe({
          next: (res: any) => {
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
      name: ['', [Validators.required]],
      team: ['', [Validators.required]],
      role: ['', [Validators.required]]
    })
  }
 
  // -------------------------List Section--------------
  getStdData() {
    this._playerserv.fetchAllData()
      .subscribe({
        next: (res: Player[]) => {
          this.stdDataInput = res;
          console.log('fetch', res)
        }
      })
  }


  onclickEdit(stdData: number) {
    this._playerserv.getSingleStd(stdData).subscribe({
      next: (res: Player) => {
        // console.log('here are get Data single',res)
        this.stdForm.patchValue(res)
        this.isEditMode = true
        this.editData = res
      }
    })

  }

  onclickRemove(stdId: number) {
    this._shareMatDialog.confirm('Are you sure, want to delete the Student')
      .subscribe((res: Boolean) => {
        console.log('afterCloseres:', res)
        if (res) {
          this._playerserv.removeData(stdId).subscribe((res: any) => {
            this.getStdData()
          })
        }
      })
    }
}








