import { Component ,OnInit} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { map } from "rxjs/operators";
import { Profession } from 'src/app/models/profession';
import { HttpClient } from '@angular/common/http';
import { NgFor, NgForOf } from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';
import { Router } from '@angular/router';






@Component({
  selector: 'app-professions-list',
  templateUrl: './professions-list.component.html',
  styleUrls: ['./professions-list.component.css'],
  standalone: true,
  imports: [MatCardModule, MatButtonModule,NgForOf,NgFor,MatGridListModule]
  
})

export class ProfessionsListComponent implements OnInit{
  
  allProfessions: Profession[] = []

  constructor(private http?:HttpClient,private router?: Router){

  }

  ngOnInit(){
    this.getData();
  }

  onProductFetch(){
    this.getData();
  }

  private getData(){
    this.http.get<{[key:string]:Profession}>("http://localhost:8080/api/profession/all")
    .pipe(map((response)=>{
      const professions = [];
      for(const key in response){
        if(response.hasOwnProperty(key)){
          professions.push({...response[key], key:key})
        }
      }
      return professions;
    }))
    .subscribe((professions) => {
      console.log(professions)
      this.allProfessions = professions;
    })
  }
  
 


  navigateToProfessionDetails(id: String  ) {
    this.router.navigate(['/profession-details', id]);
  }
}
