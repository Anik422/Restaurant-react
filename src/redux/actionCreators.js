import * as actionType from './actionType'

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