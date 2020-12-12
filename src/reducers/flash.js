import {ADD_FLASH_MESSAGE, DELETE_FLASH_MESSAGE } from '../constants';
import shortid from 'shortid';

const flashMessages = (state=[], action) => {
    switch(action.type){
        case ADD_FLASH_MESSAGE:
            return[
                ...state,
                {
                    id:shortid.generate(),
                    type: action.message.type,
                    text: action.message.text,
                }
            ]
        case DELETE_FLASH_MESSAGE:
           return state.filter((item)=> item.id !== action.id);
        default:
            return state;
    }
}

export default flashMessages;