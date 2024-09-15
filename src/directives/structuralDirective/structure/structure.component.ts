import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structure',
  templateUrl: './structure.component.html',
  styleUrls: ['./structure.component.css']
})
export class StructureComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  books=[];

  book1=null;

  book2=undefined;
  book=[
    {
      'bookId' :145,
      'bookName' :"Ramayana",
      'author' : "Sadguru",
      'bookStatus' :"Available",
      'category' : 'Education'
  },
  {
    'bookId' :146,
    'bookName' :"Bhagavadgeetha",
    'author' : "Sadguru",
    'bookStatus' :"Available",
    'category' : 'Education'
},
{
  'bookId' :147,
  'bookName' :"Mahabharat",
  'author' : "Sadguru",
  'bookStatus' :"Not Available",
  'category' : 'Education'
},
{
  'bookId' :148,
  'bookName' :"Yoga",
  'author' : "Sadguru",
  'bookStatus' :"Not Available",
  'category' : 'Health'
},
{
  'bookId' :149,
  'bookName' :"Fitness",
  'author' : "Vivek",
  'bookStatus' :"Sold",
  'category' : 'Health'
}
]

}
