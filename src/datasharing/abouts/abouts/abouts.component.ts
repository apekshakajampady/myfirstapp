import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-abouts',
  templateUrl: './abouts.component.html',
  styleUrls: ['./abouts.component.css']
})
export class AboutsComponent implements OnInit {
  @Input() Ram: any;
  @Input() subChild: any;

  constructor() { }

  ngOnInit(): void {
  }

}
