import { getAllBoards } from "./boards"

const GET_COMMENTS= 'comments/LOAD'
const ADD_COMMENT = 'comments/ADD'
const EDIT_COMMENT = 'comments/EDIT'
const DELETE_COMMENT = 'comments/DELETE'

// POJO action: get all comments
const getComments = commentsObj => {
    return {
        type: GET_COMMENTS,
        commentsObj
    }
}

// POJO action: create new comments
const addComment = newCommentObj => {
    return {
        type: ADD_COMMENTS,
        newCommentObj
    }
}

// POJO action: edit comment
const editComment = edittedCommentsObj => {
    return {
        type: EDIT_COMMENTS,
        edittedCommentsObj
    }
}

// POJO action: delete comment
const deleteComments = deletedCommentObj => {
    return {
        type: GET_COMMENTS,
        deletedCommentObj
    }
}

//Thunks
// get all comments thunk
export const thunkGetAllComments = () => async (dispatch) => {
    const response = await fetch ('/api/comments')

    if(response.ok) {
        const commentsObj = await response.json();
        dispatch(getComments(commentsObj))
        return commentsObj
    }
}
// create comment thunk
export const thunkAddComments = commentDetails => async (dispatch) => {
    const response = await fetch ('/api/comments/new', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(commentDetails)
    })
    if (response.ok) {
        const newCommentObj = await response.json();
        dispatch(addComment(newCommentObj));
        return newCommentObj
    }
}
// edit comment thunk
export const thunkEditCommentDetails = commentDetails => async(dispatch) => {
    const response = await fetch ('/api/comments/edit/${commentDetails.id}')
}
// delete comment thunk


//reducer

const initialState = {}

export default function comentsReducer(state = initialState, action) {
    const newState = {...state}
    switch(action.type) {
        case GET_COMMENTS:
            return action.payload

        case ADD_COMMENT:
            newState[action.newCommentObj.id] = action.newCommentObj
            return newState
    }
}
