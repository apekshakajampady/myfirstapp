import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-middle',
  templateUrl: './middle.component.html',
  styleUrls: ['./middle.component.css']
})
export class MiddleComponent implements OnInit {

  constructor() { }
   btnResult : boolean = true;

  ngOnInit(): void {
    setTimeout(()=>{
      this.btnResult = false;
    },8000)
  }

  onToggle(){
    if(this.studentResult=="pass")
    {
      this.studentResult="fail";
    }
    else{
      this.studentResult="pass";
    }
  }

  studentId : number = 11;
  studentName : string = "XYZ";
  studentAddress : string = "Kerala";
  studentPercentage : number = 3.3;
  studentResult : string = "fail";
}
