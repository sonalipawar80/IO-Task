import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ConfirMatDialogComponent } from "./confir-mat-dialog/confir-mat-dialog.component";
import { MatSnackBar } from "@angular/material/snack-bar";


@Injectable({
    providedIn: 'root'
})
export class SharedModuleService {
    matDialogRef: any;

    constructor(
        private _matDialog: MatDialog,
        private _snakbar:MatSnackBar
    ) { }


    

    confirm(msg: string) {
       let matDialogRefData= this._matDialog.open(ConfirMatDialogComponent, {
            width: '350px',
            data: msg
        })

        return matDialogRefData.afterClosed()
    }


    notification(notify:string,action:string){
        this._snakbar.open(notify,action,{
            duration:2000,
            verticalPosition:'top',
            horizontalPosition:'left'
        })
    }
}