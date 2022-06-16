const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';
let initialState = {
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

}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body
            return state
        case SEND_MESSAGE:
            let body = state.newMessageBody
            state.newMessageBody = ''
            state.messagesData.push({id: 6, message: body})
            return state
        default:
            return state
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => {
    return {type: UPDATE_NEW_MESSAGE_BODY, body: body}
}


export default dialogsReducer