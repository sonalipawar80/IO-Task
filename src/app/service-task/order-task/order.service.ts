import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IOrder } from '../const';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  BASE_URL = 'https://service-task-backend.onrender.com/orders';

  constructor(
    private _http: HttpClient
  ) { }


  getAllOrders():Observable<IOrder[]>{
    return this._http.get<IOrder[]>(this.BASE_URL);
  }

  createOrder(orderData:IOrder){
    return this._http.post(this.BASE_URL,orderData);
  }

  updateOrder(orderData:IOrder){
    return this._http.put(`${this.BASE_URL}/${orderData.id}`,orderData);
  }

  removeOrder(orderData:IOrder){
    return this._http.delete(`${this.BASE_URL}/${orderData.id}`);
  }
  

}
