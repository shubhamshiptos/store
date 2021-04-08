import { Action } from '@ngrx/store'
import { User } from '../models/user.model'
import * as UserActions from '../actions/user.actions'

const initialState: User = {
    first_Name: 'Shubham',
    last_Name: 'Pathak',
    email: 'pathskshubham2603@gmail.com',
    monthly_Add_Budget: 25000,
    phone: 7007551460,
}

export function reducer(state: User[] = [initialState], action: UserActions.Actions) {
    switch(action.type) {
        case UserActions.ADD_USER:
            return [...state, action.payload];

        case UserActions.REMOVE_USER:
            state.splice(action.payload, 1)
            return state;
        default:
            return state;
    }
}