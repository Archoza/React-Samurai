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
    ]
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            let body = action.newMessageBody
            return {
                ...state,
                messagesData: [...state.messagesData, {id: 6, message: body}],
            }

        }
        default:
            return state
    }
}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})



export default dialogsReducer