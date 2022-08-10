import axios from "axios";
import {API_KEY} from "../config";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': API_KEY}

})

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    deleteFollow(userId) {
        return instance.delete(`follow/${userId}`).then(response => response.data.resultCode)
    }
    ,
    addFollow(userId) {
        return instance.post(`follow/${userId}`, null).then(response => response.data.resultCode)
    }
}

export const profileAPI = { //TODO #1 need create redirect to another page after logout
    getProfile(userId = '2') {
        return instance.get(`profile/${userId}`)
            .then(response => response.data)
    },
    getStatus(userId = '2') {
        return instance.get(`profile/status/${userId}`)
            .then(response => response)
    },
    updateStatus(status) {
        return instance.put(`profile/status/`, {status})
            .then(response => response)
    },
    savePhoto(photoFile) {
        const formData = new FormData()
        formData.append('image', photoFile)
        return instance.put(`profile/photo/`, formData, {headers: {'Content-Type': 'multipart/form-data'}})
            .then(response => response)
    },
    saveProfile(profile) {
        return instance.put(`profile`, profile)
            .then(response => response)
    }

}


export const authAPI = {
    getAuth() {
        return instance.get(`auth/me/`).then(response => response.data)
    },
    login(email, password, rememberMe = false, captcha = null) {
        return instance.post(`auth/login/`, {email, password, rememberMe, captcha}).then(response => response.data)
    },
    logout() {
        return instance.delete(`auth/login/`).then(response => response.data)
    },
}

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`)//.then(response => response.url)
    }
}






