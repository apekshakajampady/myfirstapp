import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.css']
})
export class TdfComponent implements OnInit {
passwor: any;
password: any;

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(myForm:NgForm){
    console.log(myForm);    
  }
}
