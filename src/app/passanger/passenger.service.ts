import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ipassenger} from './passModule';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PassengerService {

  BASE_URL:string='http://localhost:3000/passenger';
  constructor(
    private _http:HttpClient
  ) { }

  fetchALl():Observable<Ipassenger[]>{
    return this._http.get<Ipassenger[]>(this.BASE_URL)
  }
}
