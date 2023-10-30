import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
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
import { HomeComponent } from './pages/home/home.component';
import { ProfessionDetailComponent } from './pages/profession-detail/profession-detail.component';
import { WorkerListComponent } from './components/worker-list/worker-list.component';
import { WorkerRegisterComponent } from './pages/worker-register/worker-register.component';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { SwiperModule } from 'swiper/types/shared';
import { register } from 'swiper/element/bundle';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SponsoredCarouselComponent } from './components/sponsored-carousel/sponsored-carousel.component';
import { AdminPageComponent } from './pages/admin/admin-page/admin-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatSidenavModule} from '@angular/material/sidenav';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { AdminNavbarComponent } from './pages/admin/admin-navbar/admin-navbar.component';



register();


const appRoutes: Routes =[
  {path:'',component:HomeComponent},
  {path:'admin',component:AdminPageComponent},
  {path:'profession-details/:id',component:ProfessionDetailComponent},
  {path:'join-us-today',component:WorkerRegisterComponent},
  {path:'admin/dashboard',component:DashboardComponent}
];





@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    FooterComponent,
    HomeComponent,
    ProfessionDetailComponent,
    AdminPageComponent,
    DashboardComponent,
    AdminNavbarComponent,
   
    
    
    
    
    
    
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
    NavBarComponent,
    WorkerRegisterComponent,
    SlickCarouselModule,
    SponsoredCarouselComponent,
    RouterModule.forRoot(appRoutes),
    ToastrModule.forRoot(),
    FontAwesomeModule,
    MatSidenavModule// ToastrModule added
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
