import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  items=[
    {id:101,name:'Laptop',price:200000},
    {id:102,name:'Pen',price:20},
    {id:103,name:"Book",price:800},
    {id:104,name:'Phone',price:20000}
  ];

}
