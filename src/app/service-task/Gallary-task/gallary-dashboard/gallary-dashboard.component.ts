import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Igallery } from '../../const';
import { GallaryservService } from '../gallaryserv.service';

@Component({
  selector: 'app-gallary-dashboard',
  templateUrl: './gallary-dashboard.component.html',
  styleUrls: ['./gallary-dashboard.component.scss']
})
export class GallaryDashboardComponent implements OnInit {
editMode:boolean=false;
galleryData:Igallery[]=[];
gallaeryForm!:FormGroup;


  constructor(
     private _gallerysev:GallaryservService
  ) { }
  

  ngOnInit(): void {
  this.getGalleryData();
  this.formCreation();
  }

  getGalleryData(){
    this._gallerysev.getAllData().subscribe(res=>{
      // console.log(res);
      this.galleryData=res
 
    })
  }

// ----------------------form-----------
  formCreation() {
    this.gallaeryForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      imageUrl: new FormControl('', [Validators.required])
    })
  }


  onsubmit() {
    if(this.gallaeryForm.valid){
      if(!this.editMode){
        console.log(this.gallaeryForm.value);
        let newGallData=this.gallaeryForm.value
        this.gallaeryForm.reset()
        this._gallerysev.postGalleryData(newGallData).subscribe({
          next:(res)=>{
            console.log(res);
            this.getGalleryData()
          },
          error:(err)=>{
            console.log(err);
 
          }
        })
      }
    }
  }


}
