import axios from 'axios';
import router from '@/router';
import {useToast} from 'vue-toast-notification';
const toast = useToast({
    position: 'top-right'
  });

const token = localStorage.getItem("token");

const instance = axios.create({
    baseURL: "https://mock-api.nals.vn/api/v2",
    // baseURL: "http://103.90.227.193:8080/api/",
    withCredentials: true,
    headers: {
        common: {
            Authorization: token !== null ? "Bearer " + token : "",
        },
    },
})

instance.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

instance.interceptors.response.use(response => {
    return response;
}, error => {
    if(!error || !error.response) {
        return;
    }
    let status = error.response.status
    if(status === 401) {
        toast.error("Vui lòng đăng nhập lại!");
        localStorage.clear();
        instance.defaults.headers["Authorization"] = "";
        router.push({ name: "Login" });
    }
    if(status === 403) {
        router.push({ name: "Login" });
    }
    if(status === 500) {
        toast.error("Có lỗi xảy ra, vui lòng liên hệ quản trị viên!");
    }
});

export default instance;