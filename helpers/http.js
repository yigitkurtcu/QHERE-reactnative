import axios from 'axios';

axios.interceptors.response.use((response) => {
    return response;
}, function (error) {
    if(error['response'] != undefined)
        return Promise.reject(error.response.data.error);
    return Promise.reject(error);
});

export function Register(user) {
    return new Promise((resolve,reject) => {
        axios.post('http://192.168.1.33:3000/user/register/', user)
        .then(res => {
            return resolve(res.data)
        }).catch(err => {
            return reject(err)
        })
    });
};

export function Login(user) {
    return new Promise((resolve,reject) => {
        axios.post('http://192.168.1.33:3000/user/login/', user)
        .then(res => {
            return resolve(res.data)
        }).catch(err => {
            return reject(err)
        })
    });
    
};