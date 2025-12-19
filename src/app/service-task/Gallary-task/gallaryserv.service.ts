import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Igallery } from '../const';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GallaryservService {

  BASE_URL='https://service-task-backend.onrender.com/gallery';
  constructor(
    private _http:HttpClient
  ) { }

  getAllData():Observable<Igallery[]>{
    return this._http.get<Igallery[]>(this.BASE_URL)
  }

  postGalleryData(newData:Igallery){
    return this._http.post(this.BASE_URL,newData)
  }

  updateGalleryData(id:number,newData:Igallery){
    return this._http.patch(`${this.BASE_URL}/${id}`,newData)
  }
  
  deleteGallary(id:number){
    return this._http.delete(`${this.BASE_URL}/${id}`)
  }
}
