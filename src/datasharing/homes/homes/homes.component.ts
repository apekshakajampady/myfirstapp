import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homes',
  templateUrl: './homes.component.html',
  styleUrls: ['./homes.component.css']
})
export class HomesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  name = "Nemi";
  subParent:object=[
    {
      id:250,
      name:"Apeksha"
    },
    {
      id:251,
      name:"Ram"
    },
    {
      id:252,
      name:"Sita"
    },
    {
      id:253,
      name:"Krishna"
    },
    {
      id:254,
      name:"Radha"
    }

  ]

}
