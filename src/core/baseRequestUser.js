import axios from "axios";
const apiUrl = 'http://127.0.0.1:8000/api/';
import { createToaster } from "@meforma/vue-toaster";
const toaster = createToaster({ position: "top-right" });

export default {
    getHeader() {
        let token   =   window.localStorage.getItem('chia_khoa_user');
        console.log(token);
        if(token == null) {
            return {}
        }
        return { Authorization: 'Bearer ' + token }
    },
    get(url) {
        return axios.get(apiUrl + url, {headers : this.getHeader()}).catch((res) => {
            var list_error = Object.values(res.response.data.errors);
            list_error.forEach((v, k) => {
                toaster.error(v[0]);
            });
        });
    },
    post(url, data) {
        return axios.post(apiUrl + url, data, {headers : this.getHeader()}).catch((res) => {
            var list_error = Object.values(res.response.data.errors);
            list_error.forEach((v, k) => {
                toaster.error(v[0]);
            });
        });
    },
    delete(url) {
        return axios.delete(apiUrl + url, {headers : this.getHeader()}).catch((res) => {
            var list_error = Object.values(res.response.data.errors);
            list_error.forEach((v, k) => {
                toaster.error(v[0]);
            });
        });
    },
    put(url, data) {
        return axios.put(apiUrl + url, data, {headers : this.getHeader()}).catch((res) => {
            var list_error = Object.values(res.response.data.errors);
            list_error.forEach((v, k) => {
                toaster.error(v[0]);
            });
        });
    },
}