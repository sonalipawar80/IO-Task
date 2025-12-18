import { Component, Input, OnInit } from '@angular/core';
import { IOrder } from '../../const';

@Component({
  selector: 'app-order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.scss']
})
export class OrderCardComponent implements OnInit {
  @Input() orderdData!: IOrder[];
  constructor() { }

  ngOnInit(): void {
  }


  
  status(status: string, id: number) {
    let currOrderData = this.orderdData.find(o => o.id === id)
    if(currOrderData){
      currOrderData.status = status
    }
  }

  getStatusClass(status: string) {
  return {
    'text-primary': status === 'Pending',
    'text-success': status === 'Delivered',
    'text-danger': status === 'Cancelled'
  };
}

trackById(index:number, order:IOrder){
  return order.id
}
}
