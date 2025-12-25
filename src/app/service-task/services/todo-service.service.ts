import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Ipost } from 'src/app/pipe-task/const';
import { Itodo } from '../const';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {
  BASE_URL: string = 'https://service-task-backend.onrender.com/todos'

  constructor(
    private _http: HttpClient
  ) { }


  fetchtodoData(): Observable<Itodo[]> {
    return this._http.get<Itodo[]>(this.BASE_URL)
  }

  posttodoData(data: Itodo): Observable<Itodo[]> {
    return this._http.post<Itodo[]>(this.BASE_URL, data)
  }

  updatetodoData(data: Itodo): Observable<Itodo[]> {
    return this._http.patch<Itodo[]>(`${this.BASE_URL}/${data.id}`, data)
  }

  deletetodoData(id: number): Observable<Itodo[]> {
    return this._http.delete<Itodo[]>(`${this.BASE_URL}/${id}`)
  }



}
