import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { AppState } from './../app.state';
import { User } from '../models/user.model'
import * as UserActions from '../actions/user.actions';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from "@angular/common/http";
import { Router, ActivatedRoute } from "@angular/router";
import {PaymentService} from './../services/payment.service'
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  create_User_Form:FormGroup;
  is_Submitted : boolean = false;

  constructor(private store: Store<AppState> ,
    private form_Builder:FormBuilder,
    private route: ActivatedRoute,
    private _route : Router,
    private http : HttpClient,
    private payment_Service : PaymentService
   ) { }
  ngOnInit() {
    
    this.create_User_Form = this.form_Builder.group({
      first_Name:['',Validators.required],
      last_Name:['', Validators.required],
      email:['',[Validators.required, Validators.email]],
      monthly_Add_Budget:[ ,[Validators.required]],
      phone:[ , [Validators.required, Validators.minLength(10), Validators.maxLength(10),Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
    })
  }
  get g(){ return this.create_User_Form.controls;
  }
  addUser() {
    this.is_Submitted = true;
    if(this.create_User_Form.invalid == false){
    this.store.dispatch(new UserActions.AddUser({
      first_Name: this.create_User_Form.value.first_Name,
      last_Name:  this.create_User_Form.value.last_Name,
      email:  this.create_User_Form.value.email,
      monthly_Add_Budget:  this.create_User_Form.value.monthly_Add_Budget,
      phone:  this.create_User_Form.value.phone}));
      console.log("entry saved");
      this.payment_Service.post(this.create_User_Form.value).subscribe((response:any)=>{
       
      }),
      this._route.navigate([ '/get-users']);
    }
    else{
     
    console.log("invalid entry");
    }
  }
  

  

}
