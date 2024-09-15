import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css']
})
export class LeftComponent implements OnInit {

  constructor() { }

  btnToggle : boolean = true;

  ngOnInit(): void {
    setTimeout(()=>{
      this.btnToggle = false;
    },5000)
  }

  bookId : number = 100;
  bookName : string = "Happy Life";
  bookAuthor : string = 'Krishna';
  bookStatus : string = "Available";
  bookPrice : number = 99.50;

  onToggle(){
    if(this.bookStatus == 'Available'){
      this.bookStatus = "Not Available";
    }
    else{
      this.bookStatus = 'Available'
    }
  }

}
