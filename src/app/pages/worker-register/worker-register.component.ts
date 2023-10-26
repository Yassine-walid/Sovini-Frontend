import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-worker-register',
  templateUrl: './worker-register.component.html',
  styleUrls: ['./worker-register.component.css']
})
export class WorkerRegisterComponent {

  constructor(private http: HttpClient){}


  onWorkerCreate(worker: {lName: String,fName: String,username: String,password: String,gsm: Number}){
    console.log(worker)

    this.http.post('http://localhost:8080/api/worker/add',worker)
      .subscribe((res) =>{
        console.log(res)
      })
  }
}
