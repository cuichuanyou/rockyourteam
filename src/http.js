import axios from 'axios';
import { baseUrl } from './env';
import router from './router';
import {Toast} from 'vant';
// 设置默认接口地址
axios.defaults.baseURL = baseUrl;

const showTip = msg =>{
  Toast({
    message:msg,
    duration:1000,
    forbidClick:true
  })
};

// 请求拦截
axios.interceptors.request.use(
    config=>{
      const wxpyqToken = localStorage.wxpyqToken;
      if(wxpyqToken){
        config.headers.Authorization = wxpyqToken;
      }
      return config;
    },
    error=>{
      return Promise.reject(error);
    }
);
// 响应拦截
axios.interceptors.response.use(
    response=>{
      return response;
    },
    error=>{
      // 错误提醒
      const { status } = error.response;
      if(status == 401){
        showTip('token过期, 请重新登录!');
        // this.$copyToastMes({ message: 'token过期, 请重新登录!', type: 'warning', time: 1800 });
        localStorage.removeItem('wxpyqToken');
        setTimeout(()=>{
          router.push('/login');
        },1000);
      }else{
        // this.$copyToastMes({ message: error.response.data, type: 'warning', time: 1800 });
        alert('请求错误');
      }
      return Promise.reject(error);
    }
);
export default axios;