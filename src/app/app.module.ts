import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router'
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'
import { AppComponent } from './app.component';
import{HttpClient, HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfessionsListComponent } from './components/professions-list/professions-list.component'
import {MatGridListModule} from '@angular/material/grid-list';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SliderComponent } from './components/slider/slider.component';
import { FooterComponent } from './components/footer/footer.component';
import { AdminPgeComponent } from './admin-pge/admin-pge.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfessionDetailComponent } from './pages/profession-detail/profession-detail.component';
import { WorkerListComponent } from './components/worker-list/worker-list.component';
import { WorkerRegisterComponent } from './pages/worker-register/worker-register.component';
import { FormsModule } from '@angular/forms';


const appRoutes: Routes =[
  {path:'',component:HomeComponent},
  {path:'admin',component:AdminPgeComponent},
  {path:'profession-details/:id',component:ProfessionDetailComponent},
  {path:'join-us-today',component:WorkerRegisterComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SliderComponent,
    FooterComponent,
    AdminPgeComponent,
    HomeComponent,
    ProfessionDetailComponent,
    WorkerRegisterComponent,
    
    
    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ProfessionsListComponent,
    MatGridListModule,
    WorkerListComponent,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
