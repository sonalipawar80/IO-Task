import { NgFor } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-dashboard',
  templateUrl: './form-dashboard.component.html',
  styleUrls: ['./form-dashboard.component.scss']
})
export class FormDashboardComponent implements OnInit {
@ViewChild('signupForm') singupForm!:NgForm; 
  constructor() { }

  ngOnInit(): void {
  }

  onSubmite(){
    console.log(this.singupForm)
  }
}
