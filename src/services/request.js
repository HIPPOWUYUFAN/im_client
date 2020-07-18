import axios from 'axios';
import { getLocalStorage } from '@services/public/index';
import { msg, loading } from '@components/GlobalComponent'

const getBaseUrl = (env) => {
    let base = {
        production: 'https://api.hippowu.com:8989',
        development: 'http://localhost:8989',
    }[env];
    return base;
};

class Request {


    constructor() {
        this.baseURL = getBaseUrl(process.env.NODE_ENV);
        this.timeout = 10000;
        this.withCredentials = true;
    }


    /**
     * 拦截器
     * @param {*} instance 
     * @param {*} url 
     */
    setInterceptors(instance, url) {
        instance.interceptors.request.use((config) => { // 请求拦截器
            // 在这里添加loading
            loading.open()
            // 配置token
            console.log('--------请求拦截器-------');
            if (getLocalStorage('_token')) {
                config.headers.Authorization = 'Bearer' + '' + getLocalStorage('_token');
            }
            return config;
        }, err => Promise.reject(err));

        instance.interceptors.response.use((response) => { // 响应拦截器
            // 在这里移除loading
            loading.close()
            if (response.data.respCode !== '0000') {
                msg.error(response.data.respDesc)
            }else{
                msg.success(response.data.respDesc)
            }
            // todo: 想根据业务需要，对响应结果预先处理的，都放在这里
            console.log('--------响应拦截器-------');
            return response;
        }, (err) => {
            if (err.response) { // 响应错误码处理
                switch (err.response.status) {
                    case '403':
                        // todo: handler server forbidden error
                        break;
                    // todo: handler other status code
                    default:
                        break;
                }
                console.log('err.response: ', err);
                return Promise.reject(err.response);
            }
            if (err.request) { // 请求超时处理
                if (err.request.readyState === 4 && err.request.status === 0) {
                    // 当一个请求在上面的timeout属性中设置的时间内没有完成，则触发超时错误
                    // todo handler request timeout error
                }
                console.log('err.request: ', err);
                return Promise.reject(err.request);
            }
            if (!window.navigator.online) { // 断网处理
                // todo: jump to offline page
                return -1;
            }
            console.log('err: ', err);
            return Promise.reject(err);
        });
    }

    request(options) {
        // 每次请求都会创建新的axios实例。
        const instance = axios.create();
        const config = { // 将用户传过来的参数与公共配置合并。
            ...options,
            baseURL: this.baseURL,
            timeout: this.timeout,
            // withCredentials: this.withCredentials,
        };
        // 配置拦截器，支持根据不同url配置不同的拦截器。
        this.setInterceptors(instance, options.url);
        return instance(config); // 返回axios实例的执行结果
    }


    get(url, data) {
        return this.request({
            url: url,
            method: 'get',
            params: data || null
        }).then(r => {
            return {
                success:r.data.respCode=='0000',
                msg:r.data.respDesc,
                data:r.data.respData,
            }
        })
    }

    post(url, data) {
        return this.request({
            url: url,
            method: 'post',
            data: data
        }).then(r => {
            return {
                success:r.data.respCode=='0000',
                msg:r.data.respDesc,
                data:r.data.respData,
            }
        })
    }
}

export default new Request();