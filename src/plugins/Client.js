import axios from 'axios'
import Vue from 'vue'
import { router } from '../Router'
export const client = axios.create({
    baseURL: 'http://localhost:4000/',
    headers: {
        'Accept': 'application/json',
        'content_type': 'application/json'
    }
})

client.interceptors.response.use(response => {
    if (response.status == 200 || response.status == 201) {
        return Promise.resolve(response)
    } else {
        return Promise.reject(response)
    }
}, error => {
    console.log(error);
    if (error.response && error.response.status) {
        switch (error.response.status) {
            case 400:
                Vue.swal('Error is 400')
                break;
            case 401:
                Vue.swal('Error is 401')
                break;
            case 402:
                Vue.swal('Error is 402')
                break;
            case 403:
                router.replace('/loginUser')
                break;
            case 404:
                Vue.swal('Error is 404')
                break;
            case 509:
                Vue.swal('There is not server')
                break;
            default:
                Vue.swal('Please try again')
                break;
        }
    } else {
        Vue.swal('Server is not stable')
    }
})