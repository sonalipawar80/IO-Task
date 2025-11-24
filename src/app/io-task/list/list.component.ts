import { OnInit} from '@angular/core';
import { IStd } from '../const';
import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
@Input() stdDataInput!:IStd[]
  @Output() editedId = new EventEmitter<string>();
  @Output() RemoveId=new EventEmitter<string>()
  constructor() { }

  ngOnInit(): void {
    // console.log(this.stdDataInput)
  }

  onEdit(editId:string){
    this.editedId.emit(editId)
    console.log(editId)
  }

  onRemove(remoId:string){
    console.log("remove id:"+remoId)
    this.RemoveId.emit(remoId)
  }

}
