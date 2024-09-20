import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {
  }

  // today:number = Date.now();
  today:Date=new Date();
  capitalLetter:string='kriShna';
  lowerCase:string='RaDHA';
  titleCase:string="apeKsha rAm sitA";
  a:number=10.8975;
  pi: number=3.1415926539;
  num: number=365.9686783126;
  x:number=1.0;

  name:string="Hanuman";
  names:string[]=["Ram","Sita","Hanuman","Krishna","Radha","shiv","Parvathy","Ganesh"];
 
  marks:number[]=[100,90,80,70,60,50,40];

  myData:any={
    name:'Apeksha',
    age:22,
    email:'apekshaa.kajampady@gmail.com'
  };
  
  data:string[]=["apeksha","ram","sita","krishna","radha"];

  g:string="boy";
  gender:any ={
    'boy':'Tell him',
    'girl':'Tell her',
    'other':'Tell them'
  } ;

  detail:{[key:number]:any}={
    1:'ram',
    2:'sita',
    3:800,
    4:'Krishna',
    5:'radha'
  };
  student:any=([
    [1,'ram'],
    [2,'sita'],
    [3,800],
    [4,'krishna'],
    [5,'radha']
  ]);

  f:any=1;
  flower:any ={
    '=0':'No flowers',
    '=1':'one flower',
    other:'#flowers'
  } ;

  hobby: string[]=['s','o','n','g'];

}
