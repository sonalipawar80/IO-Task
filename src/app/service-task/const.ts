export interface IStdServ {
  fname: string;
  lname: string;
  email: string;
  contact: number;
  id:string
}

export interface Itodo {
    id: string,
    title: string
}

export interface Player {
  id: number;
  name: string;
  team: string;
  role: string;
}

export interface Igallery{
  id:number;
  title:string;
  imageUrl:string;
}


export interface IBook {
  id: number;
  title: string;
  author: string;
  category: string;
  published: boolean;
}


export interface IOrder {
  id: number;
  customer: string;
  product: string;
  quantity: number;
  status:string
  // status: 'Pending' | 'Cancelled' | 'Delivered' ;
}

export interface IProduct {
  id: number;
  name: string;
  price: number;
  category: string;
}

