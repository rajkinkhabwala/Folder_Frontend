import axios from 'axios';
import config from '../config';

const path= "api/users/"
const axiosInstance = axios.creare({
    baseURL:config.url,
    timeout: 5000,
    headers:{
        'Content-Type': 'multipart/form-data',
        accept: 'multipart/form-data'
    }
})
const authServices = {

    login: (username, password) =>{

    },

    register: (username,password, email) =>{
        console.log({
            "username": username,
            "password": password,
            "email": email
        });
        axiosInstance.post(path,{
            "username": username,
            "password": password,
            "email": email
        }
        )
        .then((res)=>{
            console.log(res);
        })
        .catch((err)=>{
            console.log(err);
        })
            
    }
}
export default authServices