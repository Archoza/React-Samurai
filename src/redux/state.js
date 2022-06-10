let state = {
    profilePage: {
        postData: [
            {id: 1, message: 'Hi, how are you?', likesCount: 15},
            {id: 2, message: 'It\'s my first post', likesCount: 20},
        ],

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


export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount : 0
    }

    state.profilePage.postData.push(newPost)
}

export default state