import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component.component';
import { StudentsComponentComponent } from './students-component.component';
import {RouterModule,Router} from '@angular/router';
import {Routes} from "@angular/router";
import {DbService} from "./db.service";
import { ProfileComponent } from './profile.component';
import { ErrorComponent } from './error.component';
import {MyGuardGuard} from "./my-guard.guard";

const My_Routes : Routes= [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponentComponent},
  {path: 'student', component: StudentsComponentComponent},
  {path: 'students', redirectTo:'student'},
  {path: 'profile/:id', component: ProfileComponent,canActivate:[MyGuardGuard]},
  {path: 'error', component: ErrorComponent},
  {path:'profile',redirectTo:'error'}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    StudentsComponentComponent,
    ProfileComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(My_Routes)
  ],
  providers: [DbService,MyGuardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
