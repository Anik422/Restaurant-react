import * as actionType from './actionType'
import DISHES from '../data/dishes';


export const addcomment = (dishId, rating, comment, author) => ({
        type: actionType.ADD_COM,
        payload:{
            dishId: dishId,
            rating: rating,
            comment: comment,
            author: author,
        }
    }
);

export const loadDishes = dishes => ({
    type: actionType.LOAD_DISHES,
    payload: dishes
})

export const dishesLoading = () => ({
    type: actionType.DISHES_LOADING,
});

export const fatchdDishes = () => {
    return dispatch => {
        dispatch(dishesLoading());
        setTimeout( () => {dispatch(loadDishes(DISHES))}, 2000);
    }
};