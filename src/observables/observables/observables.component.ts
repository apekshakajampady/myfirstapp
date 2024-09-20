import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit {
  
  posts:any[]=[];

  constructor(private dataService:DataService) { }  

  ngOnInit(): void {
    this.dataService.getPosts().subscribe({
      next:(data) => this.posts = data,
      error:(err) =>console.error('Error  fetching posts',err)     
    });
  }
}


