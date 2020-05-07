import http from '@services/request';



export const sign_in = (e) => (http.post('/im_service/user/login', e))


export const sign_up = (e) => (http.post('/im_service/user/register', e))
