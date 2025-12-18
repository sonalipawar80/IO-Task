import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { log } from 'console';
import { IOrder } from '../../const';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-order-dashboard',
  templateUrl: './order-dashboard.component.html',
  styleUrls: ['./order-dashboard.component.scss']
})
export class OrderDashboardComponent implements OnInit {
  orderdData!: IOrder[];
  orderForm!:FormGroup;
  isEditMode:boolean=false;
  constructor(
    private _orderService: OrderService
  ) { }

  ngOnInit(): void {
    this.getorderData()
     this.createForm();
  }

  getorderData() {
    this._orderService.getAllOrders().subscribe(res => {
      console.log(res);
      this.orderdData = res
    })
  }

  createForm(){
    this.orderForm= new FormGroup({
      customer: new FormControl("",[Validators.required]),
      product: new FormControl("",[Validators.required]),
      quantity: new FormControl("",[Validators.required]),
      status: new FormControl("",[Validators.required])
    })

  }

  onSubmit(){
    if(this.orderForm.valid){
      console.log(this.orderForm.value);
      
      if(!this.isEditMode){
        this._orderService.createOrder(this.orderForm.value).subscribe({
          next:res=>{
            console.log(res);
            
          },
          error:err=>{
            console.log(err);
            
          }
        })
      }
    }
  }


}
