import { Component } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute  } from '@angular/router';
import { NgFor, NgForOf } from '@angular/common';
import { Worker } from 'src/app/models/worker';
import { map } from "rxjs/operators";
import { Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'app-sponsored-carousel',
  templateUrl: './sponsored-carousel.component.html',
  styleUrls: ['./sponsored-carousel.component.css'],
  standalone:true,
  imports:[MatCardModule, MatButtonModule,NgForOf,NgFor,MatGridListModule]
})
export class SponsoredCarouselComponent {
  allWorkers: Worker[] = []

  constructor(private http?:HttpClient,private route?: ActivatedRoute,private router?: Router,private cdr?: ChangeDetectorRef){

  }
  public id: String;

  ngOnInit(){
    this.id = this.route.snapshot.paramMap.get('id');
    this.getData();

    setInterval(() => {
      // Call a function to update data or perform actions
      this.getData();
      // Trigger change detection
      this.cdr.detectChanges();
    }, 5000); 
  }

  onProductFetch(){
    this.getData();
  }

  private getData(){
    this.http.get<{[key:string]:Worker}>(`http://localhost:8080/api/worker/allSponsored/${this.id}`)
    .pipe(map((response)=>{
      const workers = [];
      for(const key in response){
        if(response.hasOwnProperty(key)){
          workers.push({...response[key], key:key})
        }
      }
      return workers;
    }))
    .subscribe((workers) => {
      console.log(workers)
      this.allWorkers = workers;
    })
  }
}
