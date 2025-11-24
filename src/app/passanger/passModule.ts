export interface Ipassenger {
  fullname: string;
  checkedIn: boolean;
  checkedInDate: Date | null; 
  children: null|Ichild[]; 
  id: string;
}

export interface Ichild {
  name: string;
  age: number;
}
