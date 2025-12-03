import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Iplay, Ipost } from '../../const';
import { log } from 'console';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pipe-dashboard',
  templateUrl: './pipe-dashboard.component.html',
  styleUrls: ['./pipe-dashboard.component.scss']
})
export class PipeDashboardComponent implements OnInit {
// ---------------1-----------------
title1:string=` Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor debitis iusto sit, fugit doloremque
                repellendus beatae inventore veniam dolore tenetur.`;

// ---------------------2-------------

  PLAYER_URL:string='http://localhost:3000/cricketer'
PlayerData!:Iplay[];
searchVal!:string;
filterbyVal:string='team';

// ------------------3-----------------
POST_URL:string='http://localhost:3000/Posts';
PostData!:Ipost[];
Posts$!:Observable<Ipost[]>;
  constructor(
    private _http:HttpClient
  ) { }

  ngOnInit(): void {
    this.getPLayerData()
    this.getPostData()
    
    
  }

  getPLayerData(){
    this._http.get<Iplay[]>(this.PLAYER_URL).subscribe(res=>{
      this.PlayerData=res;
      // console.log(res)
    })
  }
  getPostData(){
    this.Posts$=this._http.get<Ipost[]>(this.POST_URL);
    console.log(this.Posts$)
  }

  interFormReset(){
    this.searchVal=''
  }

}
