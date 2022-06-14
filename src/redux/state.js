const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

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
    subscribe(observer) {
        this._state._callSubscriber = observer
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
    dispatch(action) { //{type: 'ADD-POST }
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }

            this._state.profilePage.postData.push(newPost)
            this._state.profilePage.newPostText = ''
            this._state._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText
            this._state._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.messagesPage.newMessageBody = action.body
            this._state._callSubscriber(this._state)
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.messagesPage.newMessageBody = action.body
            this._state.messagesPage.newMessageBody = ''
            this._state.messagesPage.messagesData.push({id:6, message: body})
            this._state._callSubscriber(this._state)
        }
    }


}


export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => (
    {type: UPDATE_NEW_POST_TEXT, newText: text})

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => {
    return {type: UPDATE_NEW_MESSAGE_BODY, body: body}
}



export default store
window.store = store