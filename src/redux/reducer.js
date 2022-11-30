import COMMENTS from '../data/Comments';
import { combineReducers } from 'redux';
import { InitalContactForm } from './forms';
import { createForms } from 'react-redux-form';
import * as actionType from './actionType'




const dishsReducer = (dishesState = {isLoading : false, dishes: [] }, action) => {
    switch(action.type){
        case actionType.DISHES_LOADING:
            return {
               ...dishesState,
                isLoading: true,
                dishes: []
            }
        case actionType.LOAD_DISHES:
            return {
               ...dishesState,
                isLoading: false,
                dishes: action.payload
            }
        default:
            return dishesState;
    }
    
}

const commentsReduces = (commentsState = COMMENTS, action) => {
    switch(action.type){
        case actionType.ADD_COM:
            let comment = action.payload;
            comment.id = commentsState.length;
            comment.data = new Date().toDateString();
            return commentsState.concat(comment);
        default:
            return commentsState;
    }
}


export const Reducer = combineReducers({
    dishes: dishsReducer,
    comments: commentsReduces,
    ...createForms({
        feedback: InitalContactForm
    })
})


