import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute',
  templateUrl: './attribute.component.html',
  styleUrls: ['./attribute.component.css']
})
export class AttributeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  student=[
    {
      'studentId':101,
      'studentName':'Apeksha',
      'studentStatus':'Not Present',
      'phoneNumber':8762006237
    },
    {
      'studentId':102,
      'studentName':'Veda',
      'studentStatus':'Not Present',
      'phoneNumber':8762006237
    },
    {
      'studentId':103,
      'studentName':'Vaayu',
      'studentStatus':'Present',
      'phoneNumber':8762006237
    },
    {
      'studentId':104,
      'studentName':'Krishna',
      'studentStatus':'Present',
      'phoneNumber':8762006237
    },
    {
      'studentId':105,
      'studentName':'Ram',
      'studentStatus':'Present',
      'phoneNumber':8762006237
    }

  ]

}
