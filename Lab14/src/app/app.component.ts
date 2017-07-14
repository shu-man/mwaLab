import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FormServiceService} from "./form-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public user={name:'',email:'',post:''};
  myForm:FormGroup;
  constructor(private fb:FormBuilder,private service:FormServiceService){
    this.myForm=fb.group({
      'name':['',Validators.required],
      'email':['',Validators.required],
      'post':['',[Validators.required,Validators.minLength(10)]]
    })

  }

  userInfo(){
    this.service.getUsers().subscribe(
      data=>{
        this.user.name=data.name;
        this.user.email=data.email;
      }
    );

   this.service.getPost().subscribe(
      data=>{
        this.user.post=data[0].title;
      }
    )
  }

  onsubmit(){
    console.log(this.user);
  }
}
