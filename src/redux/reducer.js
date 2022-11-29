import DISHES from '../data/dishes';
import COMMENTS from '../data/Comments';

const initState = {
    dishes: DISHES,
    comments: COMMENTS,
}


export const Reducer = (state = initState, action) => {
    if (action.type === 'ADD_COM'){
        let comment = action.payload;
        comment.id = state.comments.length;
        comment.data = new Date().toDateString();
        return{
            ...state,
            comments: state.comments.concat(comment)
        }
    }
    return state;
}