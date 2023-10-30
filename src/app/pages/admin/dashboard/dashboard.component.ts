import { Component ,OnInit} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { map } from "rxjs/operators";
import { HttpClient } from '@angular/common/http';
import { NgFor, NgForOf } from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  allWorker: Worker[] = []
  workersNotValidated=0;
  professionCount=0;
  workerValidated=0;

  constructor(private http?:HttpClient,private router?: Router){}

  ngOnInit(){
    this.getData();
    this.getProfessionData();
    this.getValidatedWorkers();
  }


  private getData(){
    this.http.get<{[key:string]:Worker}>("http://localhost:8080/api/worker/allNotValidated")
    .pipe(map((response)=>{
      const workersNotValidated = [];
      for(const key in response){
        if(response.hasOwnProperty(key)){
          workersNotValidated.push({...response[key], key:key})
        }
      }
      return workersNotValidated;
    }))
    .subscribe((workersNotValidated) => {
      console.log(workersNotValidated)
      this.allWorker = workersNotValidated;
      this.workersNotValidated = workersNotValidated.length;
      console.log(this.workersNotValidated)
    })

  }

  private getProfessionData(){
    this.http.get<{[key:string]:Worker}>("http://localhost:8080/api/profession/all")
    .pipe(map((response)=>{
      const profession = [];
      for(const key in response){
        if(response.hasOwnProperty(key)){
          profession.push({...response[key], key:key})
        }
      }
      return profession;
    }))
    .subscribe((profession) => {
      console.log(profession)
      this.professionCount = profession.length
    })
}

private getValidatedWorkers(){
  this.http.get<{[key:string]:Worker}>("http://localhost:8080/api/worker/allValidated")
  .pipe(map((response)=>{
    const workerValidated = [];
    for(const key in response){
      if(response.hasOwnProperty(key)){
        workerValidated.push({...response[key], key:key})
      }
    }
    return workerValidated;
  }))
  .subscribe((workerValidated) => {
    console.log(workerValidated)
    this.workerValidated = workerValidated.length
  })
}
  
}
