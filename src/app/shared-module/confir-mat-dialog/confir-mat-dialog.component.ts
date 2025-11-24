import { Component, Inject, OnInit } from '@angular/core';
import { MatButtonModule } from "@angular/material/button";
import { OverlayModule } from "@angular/cdk/overlay";
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confir-mat-dialog',
  templateUrl: './confir-mat-dialog.component.html',
  styleUrls: ['./confir-mat-dialog.component.scss']
})
export class ConfirMatDialogComponent implements OnInit {
msg!:string
  constructor(
    private _matRef:MatDialogRef<ConfirMatDialogComponent>,
    @Inject(MAT_DIALOG_DATA) msgData:string 
  ) {
    this.msg=msgData
   }

  ngOnInit(): void {
  }

 onclick(val:Boolean){
  this._matRef.close(val)
  console.log('cancleorremove',val)
 }

}
