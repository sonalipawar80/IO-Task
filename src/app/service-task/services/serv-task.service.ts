import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IStdServ } from '../const';
import { SharedModuleService } from 'src/app/shared-module/shared-module.service';

@Injectable({
  providedIn: 'root'
})
export class ServTaskService {
  BASE_URL ='https://service-task-backend.onrender.com/students'

  private stdSourse = new BehaviorSubject<any>(null);

  curresntStd = this.stdSourse.asObservable();
  constructor(
    private _http: HttpClient,
    private _snakBar:SharedModuleService
  ) { }

  fetchAllData(): Observable<IStdServ[]> {
    return this._http.get<IStdServ[]>(this.BASE_URL)
  
  }

  postData(NewData: IStdServ) {
    this._snakBar.notification('New Student added Successfully','Success')
    return this._http.post(this.BASE_URL, NewData)
  }

  updateData(stdId: string, updatedData: Partial<IStdServ>) {
    this._snakBar.notification('Student Updated Successfully','Success')
    return this._http.patch(`${this.BASE_URL}/${stdId}`, updatedData)
  }

  getSingleStd(stdId: string): Observable<any> {
    return this._http.get(`${this.BASE_URL}/${stdId}`)
  }

  removeData(stdId: string) {
    this._snakBar.notification('Student Removed Successfully','Close')
    return this._http.delete(`${this.BASE_URL}/${stdId}`)
  }

  sendStd(std: IStdServ) {
    return this.stdSourse.next(std)
  }

}
