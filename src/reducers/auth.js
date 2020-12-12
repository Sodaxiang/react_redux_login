import {SET_CURRENT_USER} from '../constants';
import isEmpty from 'lodash/isEmpty';

const initialState={
    user:{},
    isAuthenticated: false, //保存是否已经登录
};

const auth = (state=initialState, action={}) => {
    switch(action.type){
        case SET_CURRENT_USER:
            return {
                isAuthenticated: !isEmpty(action.user),
                user: action.user
            }
        default:
          return state;
    }
};

export default auth;