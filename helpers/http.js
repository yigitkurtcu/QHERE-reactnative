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

export function getClasses() {
    return new Promise((resolve,reject) => {
        axios.get('http://192.168.1.33:3000/student/getClasses/')
        .then(res => {
            return resolve(res.data)
        }).catch(err => {
            return reject(err)
        })
    });
};

export function getMyClasses() {
    return new Promise((resolve,reject) => {
        axios.get('http://192.168.1.33:3000/student/getUserClasses')
        .then(res => {
            return resolve(res.data)
        }).catch(err => {
            return reject(err)
        })
    });
};

export function checkToken() {
    return new Promise((resolve,reject) => {
        if(axios.defaults.headers.common['Authorization'] != undefined)
            return resolve(axios.defaults.headers.common['Authorization'])
        else
            return reject('No token')
    });
};