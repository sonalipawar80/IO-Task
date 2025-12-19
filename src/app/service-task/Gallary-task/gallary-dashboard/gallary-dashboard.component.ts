import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Igallery } from '../../const';
import { GallaryservService } from '../gallaryserv.service';
import { SharedModuleService } from 'src/app/shared-module/shared-module.service';
import { log } from 'console';

@Component({
  selector: 'app-gallary-dashboard',
  templateUrl: './gallary-dashboard.component.html',
  styleUrls: ['./gallary-dashboard.component.scss']
})
export class GallaryDashboardComponent implements OnInit {
  editMode: boolean = false;
  galleryData: Igallery[] = [];
  gallaeryForm!: FormGroup;
  editedDataId!: number;


  constructor(
    private _gallerysev: GallaryservService,
    private _sharedm: SharedModuleService
  ) { }


  ngOnInit(): void {
    this.getGalleryData();
    this.formCreation();
  }

  getGalleryData() {
    this._gallerysev.getAllData().subscribe(res => {
      // console.log(res);
      this.galleryData = res

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
    if (this.gallaeryForm.valid) {
      if (!this.editMode) {
        console.log(this.gallaeryForm.value);
        let newGallData = this.gallaeryForm.value
        this.gallaeryForm.reset()
        this._gallerysev.postGalleryData(newGallData).subscribe({
          next: (res) => {
            console.log(res);
            this.getGalleryData()
          },
          error: (err) => {
            console.log(err);

          }
        })
      } else {
        // console.log(this.gallaeryForm.value);
        this._gallerysev.updateGalleryData(this.editedDataId, this.gallaeryForm.value).subscribe({
          next: res => {
            console.log(res);
            this.getGalleryData();
            this.editMode = false;
            this.gallaeryForm.reset()
          },
          error: err => {
            console.log(err);

          }
        })
      }
    }
  }

  onclickEdit(editData: Igallery) {
    this.editMode = true;
    this.editedDataId = editData.id
    this.gallaeryForm.patchValue(editData)
  }

  onremove(id: number) {
    this._sharedm.confirm("Are you sure to delete this gallary image?").subscribe(res => {
      if (res) {
        console.log(res);

        this._gallerysev.deleteGallary(id).subscribe({
          next: res => {
            console.log(res);
            this.getGalleryData()

          }
        })
      }
    })
  }


}
