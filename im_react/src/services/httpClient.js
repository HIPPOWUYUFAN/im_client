import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8989/im_service';

// // 添加请求拦截器
// axios.interceptors.request.use(function (config) {
//     // 在发送请求之前做些什么
//     console.log(`-------------请求：${JSON.stringify(config)}-------------`)
//     return Promise.resolve(config)
// }, function (error) {
//     // 对请求错误做些什么
//     console.log(`-------------请求error：${error}-------------`)
//     return Promise.reject(error);
// });

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    console.log(`-------------响应：${JSON.stringify(response)}-------------`)
    return response;
}, function (error) {
    // 对响应错误做点什么
    console.log(`-------------响应error：${error}-------------`)
    // return Promise.reject(error);
});



export function test() {
    axios.get(`/user/select`).then(r => console.log(r))
    // axios({
    //     url:`/user/select`,
    //     meth
    // })
}


// export function get(
//     url,

// ) {
//     axios.get

// }