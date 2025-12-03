import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { from, map, mergeMap, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MergeMapService{

  productFakeApi = 'https://fakestoreapi.com/products';
  productReviewPlaceholder = 'https://jsonplaceholder.typicode.com/posts'
  productwithreviewArr:any[]=[];

  constructor(
    private _http: HttpClient
  ) { }

  getProductWithReview():Observable<any> {
  return  this._http.get<any[]>(this.productFakeApi) //product Arr dega
      .pipe(
        mergeMap(products => {
          return from(products)
        }),
        mergeMap(product => {
          return this._http.get(`${this.productReviewPlaceholder}/${product.id}`)
            .pipe(
              map(review => {
                
                let obj={
                  ...product,
                  review: review
                }
                this.productwithreviewArr.push(obj)
              })
            )
        })
      )
  }
  
}
