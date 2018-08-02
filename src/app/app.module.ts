import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{RouterModule} from '@angular/router';
import{ HttpModule} from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StorageServiceModule} from 'angular-webstorage-service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home .component';
import { TopbarComponent } from './topbar/topbar.component'; 
import { FilterExpencePipe } from './filter-expence.pipe';
 
 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopbarComponent,     
    FilterExpencePipe
     
  ],
  imports: [
    BrowserModule,
    HttpModule,
    StorageServiceModule,
    FormsModule, ReactiveFormsModule ,
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'topbar', component: TopbarComponent },               
      { path: '**', redirectTo: 'home' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
