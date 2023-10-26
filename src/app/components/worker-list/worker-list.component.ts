import { Component } from '@angular/core';
import { map } from "rxjs/operators";
import { Worker } from 'src/app/models/worker';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute  } from '@angular/router';
import { NgFor, NgForOf } from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-worker-list',
  templateUrl: './worker-list.component.html',
  styleUrls: ['./worker-list.component.css'],
  standalone:true,
  imports: [MatCardModule, MatButtonModule,NgForOf,NgFor,MatGridListModule]
})
export class WorkerListComponent {
  allWorkers: Worker[] = []

  constructor(private http?:HttpClient,private route?: ActivatedRoute){

  }
  public id: String;

  ngOnInit(){
    this.id = this.route.snapshot.paramMap.get('id');
    this.getData();
  }

  onProductFetch(){
    this.getData();
  }

  private getData(){
    this.http.get<{[key:string]:Worker}>(`http://localhost:8080/api/worker/all/${this.id}`)
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
