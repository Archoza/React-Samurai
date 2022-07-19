import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'wild_wizards/auth/SET_USER_DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state, ...action.data,
                isAuth: true
            }
        }
        default:
            return state
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => (
    {type: SET_USER_DATA, data: {userId, email, login, isAuth}})

export const getAuthUserData = () => async (dispatch) => {
    let data = await authAPI.getAuth()
    if (data.resultCode === 0) {
        let {id, login, email} = data.data
        dispatch(setAuthUserData(id, login, email))
    }
}


export const login = (email, password, rememberMe) => async (dispatch) => {
    let data = await authAPI.login(email, password, rememberMe)
    if (data.resultCode === 0) {
        let {id, login, email} = data.data
        dispatch(setAuthUserData(id, login, email, true))
    } else {
        let message = data.messages.length > 0 ? data.messages[0] : 'Some error'
        dispatch(stopSubmit('login', {_error: message}))
    }

}
export const logout = () => async (dispatch) => {
    let data = await authAPI.logout()
    if (data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }

    //TODO #1 Redirect here from logout
}


export default authReducer