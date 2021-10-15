

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
        type: ADD_COMMENT,
        newCommentObj
    }
}

// POJO action: edit comment
const editComment = edittedCommentsObj => {
    return {
        type: EDIT_COMMENT,
        edittedCommentsObj
    }
}

// POJO action: delete comment
const deleteComments = deletedCommentObj => {
    return {
        type: DELETE_COMMENT,
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
    console.log("@@@@@@",commentDetails)
    const response = await fetch (`/api/comments/edit/${commentDetails.pin_id}/${commentDetails.id}`,{
        method: 'PATCH',
        body: JSON.stringify(commentDetails)
    })
    console.log("@@@@@@",commentDetails)
    if (response.ok) {
        const edittedCommentsObj = await response.json()
        dispatch(editComment(edittedCommentsObj))
        return edittedCommentsObj
    }
}
// delete comment thunk
export const thunkDeleteComment = id => async (dispatch) => {
    const response = await fetch(`/api/comments/delete/${id}`,{
        method:'DELETE',
        body: JSON.stringify(id)
    })
    if(response.ok) {
        const deletedCommentObj = await response.json();
        dispatch(deleteComments(deletedCommentObj))
        console.log("-------",deletedCommentObj)
        return deletedCommentObj
    }
}


//reducer

const initialState = {}

export default function comentsReducer(state = initialState, action) {
    const newState = {...state}
    switch(action.type) {
        case GET_COMMENTS:
            return action.commentsObj

        case ADD_COMMENT:
            newState[action.newCommentObj.id] = action.newCommentObj
            return newState

        case EDIT_COMMENT:
            newState[action.edittedCommentsObj.id] = action.edittedCommentsObj
            return newState

        case DELETE_COMMENT:
            delete newState[action.deletedCommentObj.id]
            return newState

        default:
            return state

    }
}
