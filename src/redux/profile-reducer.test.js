import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";

let state = {
    postData: [
        {id: 1, message: 'Hi, how are you?', likesCount: 15},
        {id: 2, message: 'It\'s my first post', likesCount: 20},
    ],
}

test('length of posts should be incremented', () => {
    // 1. start data
    let action = addPostActionCreator('wild-wizards')
    // 2. action
    let newState = profileReducer(state, action)
    // 3. expectation
    expect(newState.postData.length).toBe(3)

});
test('message of post should be correct', () => {
    let action = addPostActionCreator('wild-wizards')
    let newState = profileReducer(state, action)
    expect(newState.postData[2].message).toBe('wild-wizards')
});
test('after deleting length of messages should be decrement', () => {
    let action = deletePost(1)
    let newState = profileReducer(state, action)
    expect(newState.postData.length).toBe(1)
    console.log(newState)
});
test('after deleting length of messages should`t be decrement if id is incorrect', () => {
    let action = deletePost(100)
    let newState = profileReducer(state, action)
    expect(newState.postData.length).toBe(2)
});
