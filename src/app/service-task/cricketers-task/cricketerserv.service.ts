import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iplay, Ipost } from 'src/app/pipe-task/const';
import { SharedModuleService } from 'src/app/shared-module/shared-module.service';
import { Player } from '../const';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CricketerservService {
BASE_URL ='https://service-task-backend.onrender.com/cricketers'

  // private stdSourse = new BehaviorSubject<any>(null);

  // curresntStd = this.stdSourse.asObservable();
  constructor(
    private _http: HttpClient,
    private _snakBar:SharedModuleService
  ) { }

  fetchAllData(): Observable<Player[]> {
    return this._http.get<Player[]>(this.BASE_URL)
 
  }

  postData(NewData: Player) {
    this._snakBar.notification('New Student added Successfully','Success')
    return this._http.post(this.BASE_URL, NewData)
  }

  updateData(stdId: number, updatedData: Partial<Player>) {
    this._snakBar.notification('Student Updated Successfully','Success')
    return this._http.patch(`${this.BASE_URL}/${stdId}`, updatedData)
  }

  getSingleStd(stdId: number): Observable<any> {
    return this._http.get(`${this.BASE_URL}/${stdId}`)
  }

  removeData(stdId: number) {
    this._snakBar.notification('Student Removed Successfully','Close')
    return this._http.delete(`${this.BASE_URL}/${stdId}`)
  }

  // sendStd(std: Player) {
  //   return this.stdSourse.next(std)
  // }service-task
}


