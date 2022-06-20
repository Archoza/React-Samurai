import {combineReducers, createStore} from 'redux'
import sidebarReducer from "./sidebar-reducer";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";
const API_KEY = '28d8b717-c511-4023-9e71-7ad71390d46b'

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer
})


let store = createStore(reducers)

window.store = store

export default store

