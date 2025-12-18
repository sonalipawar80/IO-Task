export interface Iplay {
    "name": string,
    "team": string,
    "odiRuns": number,
    "testRuns": number,
    "yearDebut": number
    [key: string]: any;  
}

export interface Ipost{
     "userId": number,
    "id": number,
    "title": string,
    "body":string 
}

export interface IStdServ {
  fname: string;
  lname: string;
  email: string;
  contact: number;
  id:string,
  [key :string]:any;
}