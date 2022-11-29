import DISHES from '../data/dishes';
import COMMENTS from '../data/Comments';
import { combineReducers } from 'redux';




const dishsReducer = (dishesState = DISHES, action) => {
    switch(action.type){
        default:
            return dishesState;
    }
    
}

const commentsReduces = (commentsState = COMMENTS, action) => {
    switch(action.type){
        case "ADD_COM":
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
})


