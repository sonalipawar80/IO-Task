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