import { Component, OnInit } from '@angular/core';
import { CounterService } from 'src/service/counter.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public _counter:CounterService) { }

  ngOnInit(): void {
  }

  increment(){
    this._counter.addOne();
  }

}
