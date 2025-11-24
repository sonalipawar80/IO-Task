import { Component, OnInit } from '@angular/core';
import { PassengerService } from '../passenger.service';
import { Ipassenger } from '../passModule';

@Component({
  selector: 'app-passenger-dashboard',
  templateUrl: './passenger-dashboard.component.html',
  styleUrls: ['./passenger-dashboard.component.scss']
})
export class PassengerDashboardComponent implements OnInit {
[x: string]: any;
passengerData!:Ipassenger[];
  constructor(
    private _passServ:PassengerService
  ) { }

  ngOnInit(): void {
    this.getAllPassenerData()
  }

  getAllPassenerData(){
    this._passServ.fetchALl().subscribe({
      next:(res)=>{
        console.log(res)
        this.passengerData=res
      }
    })
  }

}
