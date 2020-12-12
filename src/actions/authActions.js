import axios from "axios";
import setAuthorizationToken from '../utils/setAuthorizationToken';
import jwtDecode from 'jwt-decode'; //将jwt数据解密，获取用户的信息
import {SET_CURRENT_USER} from '../constants';

export const setCurrentUser = user =>{
    return {
        type: SET_CURRENT_USER,
        user
    }
}

export const login = (user) =>{
    return dispatch =>{
        return axios.post('/api/login', user).then(
            (res=>{
                const token = res.data.jwtToken;

                localStorage.setItem('jwtToken', token);
                // 将jwt放在请求头中
                setAuthorizationToken(token);
                //将用jwt-decode解密后的数据获取到存入用户中
                dispatch(setCurrentUser(jwtDecode(token)));
            })
        );
    }
}

export const logout = () =>{
    return dispatch => {
        localStorage.removeItem('jwtToken');
        setAuthorizationToken(false);
        dispatch(setCurrentUser({}));
    }
}
