import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Itask } from '../const';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskManagerService {

BASE_URL='https://service-task-backend.onrender.com/tasks'

  constructor(
    private _http:HttpClient
  ) { }

  getAllTasks():Observable<Itask[]>{
    return  this._http.get<Itask[]>(this.BASE_URL)
  }

  postTask(newData:Itask){
    return this._http.post(this.BASE_URL,newData)
  }

getStatusSummary(tasks: Itask[]): { title: string; count: number }[] {
  return Object.values(
    tasks.reduce((acc: any, task) => {

      if (!task.status) {
        return acc; 
      }

      if (!acc[task.status]) {
        acc[task.status] = { title: task.status, count: 1 };
      } else {
        acc[task.status].count++;
      }
      return acc;
    }, {})
  );
}





}
