import { Component ,OnInit} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { map } from "rxjs/operators";
import { HttpClient } from '@angular/common/http';
import { NgFor, NgForOf } from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';
import { Router } from '@angular/router';
import { Worker } from 'src/app/models/worker';

@Component({
  selector: 'app-worker-applications',
  templateUrl: './worker-applications.component.html',
  styleUrls: ['./worker-applications.component.css']
})
export class WorkerApplicationsComponent {

  allWorkers: Worker[] = []

  constructor(private http?:HttpClient,private router?: Router){}

  ngOnInit(){
    this.getData();
  }

  public validateWorker(id:String){
    this.http.put(`http://localhost:8080/api/worker/validation/${id}`,{}).subscribe(() =>{
      location.reload()

    }
    )
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
      this.allWorkers = workersNotValidated;
    })

  }


}
