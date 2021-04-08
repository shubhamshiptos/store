import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { User } from '../models/user.model';
import { AppState } from './../app.state';
import * as UserActions from '../actions/user.actions';

import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  users: Observable<User[]>;
  monthly_Avg_Budget = [{"m_a_b" : "1000-2000"},{"m_a_b" : "2000-3000"},{"m_a_b" : "3000-4000"},{"m_a_b" : "4000-5000"}];
  constructor(private store: Store<AppState>,
    private route: ActivatedRoute
    , private _route : Router) { 
    this.users = store.select('user')
  }

  deleteUser(index) {
    this.store.dispatch(new UserActions.RemoveUser(index))
  }
  

  ngOnInit() {
  }

  navigate(){
    this._route.navigate([ '/create-user']);
  }

}
