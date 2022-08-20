import axios from 'axios';

const service = axios.create({
     baseURL: 'http://120.76.142.160:8008',
     timeout: 5000
})
service.interceptors.request.use(config=>{
     const { url } = config;
 
     // startsWith() ---以什么开头;  这两个请求路径不需要token 
     if(!url.startsWith('/login') ||  !url.startsWith('/register1')||  !url.startsWith('/register2')||  !url.startsWith('/register3')){ 
 
         //当请求路径不是这两个的时候, 添加token请求头
         config.headers.Authorization = localStorage.getItem('token');
     }
     return config
 })
 
service.interceptors.response.use(response => {
 
     const { status }  = response.data; //这里的response数据结构不一样，直接打印出来看，参照后端返回的结果
 
     if(status === 400 || status === 401 || status === 402 || 403){ 
         localStorage.removeItem('token');
         //当token超时or失效 403账号无权限的时候直接跳转到/login页重新登录
         window.history.pushState({}, undefined, "/auth/homepage")
     }
     return response
 })
 
export default service;