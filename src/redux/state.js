import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            postData: [
                {id: 1, message: 'Hi, how are you?', likesCount: 15},
                {id: 2, message: 'It\'s my first post', likesCount: 20},
            ],
            newPostText: 'Wildwizards.ru'

        },
        messagesPage: {
            messagesData: [
                {id: 1, message: 'hi'},
                {id: 2, message: 'how is your it?'},
                {id: 3, message: 'Yo!'},
            ],
            dialogsData: [
                {id: 1, name: 'Vlad'},
                {id: 2, name: 'Alina'},
                {id: 3, name: 'Roma'},
                {id: 4, name: 'Igor'},
                {id: 5, name: 'Viktor'},
                {id: 6, name: 'Andrey'},
            ],
            newMessageBody: ''

        },
        sidebar: {}

    },
    _callSubscriber() {
        console.log('state is changed')
    },
    getState() {
        return this._state
    },
    _updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText
        this._state._callSubscriber(this._state)
    },
    _addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        }

        this._state.profilePage.postData.push(newPost)
        this._state.profilePage.newPostText = ''
        this._state._callSubscriber(this._state)
    },
    subscribe(observer) {
        this._state._callSubscriber = observer
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._callSubscriber(this._state)
    }


}






export default store
window.store = store