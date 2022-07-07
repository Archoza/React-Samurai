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

export const authAPI = {
    getAuth() {
        return instance.get(`auth/me/`).then(response => response.data)
    }
}

export const profileAPI = {
    getProfile(userId='2') {
        return instance.get(`profile/${userId}`)
            .then(response => response.data)
    },
    getStatus(userId='2') {
        return instance.get(`profile/status/${userId}`)
            .then(response => response)
    },
    updateStatus(status) {
        return instance.put(`profile/status/`, {status})
            .then(response => response.data)
    },

}







