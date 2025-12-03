import { Component, OnInit } from '@angular/core';
import { MergeMapService } from '../../merge-map.service';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.scss']
})
export class MergeMapComponent implements OnInit {
productDataWithReview!:any[];
  constructor(
    private _merge:MergeMapService
  ) { }

  ngOnInit(): void {
  console.log(this._merge.productwithreviewArr)
  this._merge.getProductWithReview().subscribe()
  this.productDataWithReview=this._merge.productwithreviewArr
  }

}
