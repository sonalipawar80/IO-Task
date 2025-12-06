import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Ipost } from 'src/app/pipe-task/const';
import { Itodo } from '../const';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

 Arr=[
  {
    "id": '1',
    "title": "delectus aut autem"
  },
  {
    "id": '2',
    "title": "quis ut nam facilis et officia qui"
  },
  {
    "id": '3',
    "title": "fugiat veniam minus"
  },
  {
    "id": '4',
    "title": "et porro tempora"
  },
  {
    "id": '5',
    "title": "laboriosam mollitia et enim quasi adipisci quia provident illu"
  },
  {
    "id": '6',
    "title": "qui ullam ratione quibusdam voluptatem quia omnis"
  },
  {
    "id": '7',
    "title": "illo expedita consequatur quia in"
  }]


   uuid = () => {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      (character) => {
        const random = (Math.random() * 16) | 0;
        const value = character === "x" ? random : (random & 0x3) | 0x8;
        return value.toString(16);
      }
    );
  };

  constructor(
    private _http:HttpClient
  ) { }

  fetchAllTodos(){
    return of(this.Arr)
  }

addTodo(todo:any) {
 return this.Arr.push(todo)
}

update(updatedTodo:Itodo){
  let findInex=this.Arr.findIndex(res=>res.id===updatedTodo.id)
   if (findInex !== -1) {
    this.Arr[findInex] = updatedTodo;
  }
}

remove(todoId: string) {
  const index = this.Arr.findIndex(todo => todo.id === todoId);

  if (index !== -1) {
    this.Arr.splice(index, 1);
  }
}



}
