import { Component,  OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../user';
import { UserRegistrationService } from '../user-registration.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 
  constructor(private service:UserRegistrationService,private formBuilder:FormBuilder){}
  // addStudent= new FormGroup({
  //   firstname: new FormControl(''),
  //   lastname: new FormControl(''),
  //   email:new FormControl(''),
  //   password:new FormControl(''),
  // })
  addStudent=this.formBuilder.group({
    firstname:['',Validators.required],
    lastname:['',Validators.required],
    email:['',Validators.required,Validators.email],
    password:['',Validators.required],
  }) 
  ngOnInit(){
  
  }
  saveData(){
    console.log(this.addStudent.value);
    
  }

}
