import { Component ,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgFor, NgForOf } from '@angular/common';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { Profession } from 'src/app/models/profession';
import { ToastrService } from 'ngx-toastr';
import { NavBarComponent } from 'src/app/components/nav-bar/nav-bar.component';



@Component({
  selector: 'app-worker-register',
  templateUrl: './worker-register.component.html',
  styleUrls: ['./worker-register.component.css'],
  standalone:true,
  imports: [NgForOf,NgFor,FormsModule,NavBarComponent],

})

@Injectable({
  providedIn: 'root'
})

export class WorkerRegisterComponent implements OnInit{

  selectedOption: string;

  allProfessions: Profession[] = []
  
  constructor(private http?:HttpClient){

  }

  changeProfession(e){
    this.selectedOption=e.target.value;
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

  onWorkerCreate(worker: {lName: String,fName: String,username: String,password: String,gsm: Number,profession:String}){
    
    worker.profession=this.selectedOption
    if(worker.lName !== "" && worker.fName !== "" && worker.gsm !== null && worker.username !== "" && worker.password !== ""&& worker.profession !== ""){
      this.http.post('http://localhost:8080/api/worker/add',worker)
      .subscribe((res) =>{
          console.log(res)
      })
  } else {
      alert("Remplire tous les champs svp !!!")
  }
  }
}
