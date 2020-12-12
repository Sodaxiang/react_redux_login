import axios from 'axios';
/**
 * 客户端每次与服务器通信，都要带上这个 JWT
 * 你可以把它放在 Cookie 里面自动发送，但是这样不能跨域，
 * 所以更好的做法是放在 HTTP 请求的头信息Authorization字段里面
 * 还有一种做法跨域的时候，把它放在POST的请求体中
 */


const setAuthorizationToken = token => {
    if(token){
        axios.defaults.headers.common['Authorization'] = `Bare ${token}`;
    }else{
        delete axios.defaults.headers.common['Authorization'];
    }
}

export default setAuthorizationToken;