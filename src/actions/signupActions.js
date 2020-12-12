import axios from 'axios';

export const userSignupRequest = (userData) =>{
    return dispatch =>{
        return axios.post('/api/user', userData);
    }
}

export const checkUserExist = (user) => {
    return dispatch =>{
        return axios.get('/api/user/check',{params:user})
    }
}