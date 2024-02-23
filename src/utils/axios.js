import axios from "axios";
import Cookies from 'js-cookie';
import {API_BASE_URL} from "./constants";
const intance = axios.create({baseURL: API_BASE_URL});
const momentTimezone = require("moment-timezone");
intance.interceptors.request.use((request) => {
    const token = Cookies.get("civit-build-token");
    if(token){
        request.headers.authorization = `${token}`;
    }
    request.headers.tz = momentTimezone.tz.guess();
    return request;
},(error) => {
    return Promise.reject(error);
});
intance.interceptors.response.use((response) => {
    return Promise.resolve(response);
},async(error) => {
    if(error.response.data.status === 401){
        Cookies.remove("civit-build-token");
        Cookies.remove("civit-build-user");
        if(window.location.pathname !== "/"){
            window.location.href = '/';
        }else{
            window.location.reload();
        }
        return Promise.reject(error);
    }else{
        return Promise.reject(error);
    }
});
export default intance;