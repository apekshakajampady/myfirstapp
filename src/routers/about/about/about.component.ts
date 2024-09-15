import { Component, OnInit } from '@angular/core';
import { CounterService } from 'src/service/counter.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers: [CounterService]
})
export class AboutComponent implements OnInit {

  constructor(public _incre:CounterService) { }

  ngOnInit(): void {
  }

  count(){
    this._incre.addOne();
  }

}
