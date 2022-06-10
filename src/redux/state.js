import {rerenderEntireTree} from "../render";


let state = {
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
        ]
    },
    sidebar: {}

}
window.state = state


export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount : 0
    }

    state.profilePage.postData.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree(state)
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state)
}

export default state