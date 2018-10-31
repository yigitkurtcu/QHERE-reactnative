import { SecureStore } from 'expo' 

export function getKey(key) {
    return new Promise((resolve,reject) => {
        SecureStore.getItemAsync(key)
        .then((result)=>{
            return resolve(result);
            }).catch((error)=>{
            return reject(error)
        })
    });
}

export function setKey(key, value) {
    return new Promise((resolve,reject) => {
        SecureStore.setItemAsync(key, JSON.stringify(value))
        .then((result)=>{
            return resolve(result);
            }).catch((error)=>{
            return reject(error)
        })
    });
}

export function clearStore() {
    return new Promise((resolve,reject) => {
        SecureStore.deleteItemAsync('accessToken')
        .then(()=>{
            SecureStore.deleteItemAsync('userType')
            .then(()=>{
                return resolve("deleted");
            }).catch((error)=>{
                return reject(error)
            })
        }).catch((error)=>{
        return reject(error)
        })
    });
}

export function checkStore() {
    return new Promise((resolve,reject) => {
        getKey('accessToken').then(token => {
            getKey('userType').then(userType => {
                return resolve("Store verified.");
            }).catch(err => {
                return reject("No userType")
            })
        }).catch(err => {
            return reject("No token")
        })
    });
}