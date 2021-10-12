const GET_BOARDS = 'boards/LOAD'
const ADD_BOARDS = 'boards/ADD'
const EDIT_BOARDS = 'boards/EDIT'
const DELETE_BOARDS = 'boards/DELETE'


const getBoards = boardsList => {
    return {
        type: GET_BOARDS,
        boardsList
    }
}


const addBoard = boardsList => {
    return {
        type: ADD_BOARDS,
        boardsList
    }
}


const editBoard = boardsList => {
    return {
        type: EDIT_BOARDS,
        boardsList
    }
}


const deleteBoard = boardsList => {
    return {
        type: DELETE_BOARDS,
        boardsList
    }
}

// all thunks will return a list of all boards, the api routes will edit
// the database and then query for the new complete list of boards
// if this works, we only need the get boards action in the reducer
// changed the thunks to use only get boards and changed the routes
// to return lists of boards, see yelp project as a reference
// test it, if it works, then delete et newState, all the other cases in the
//reducer, and return {list: action.boardsList} to make code minimal
//if it works, use this method for other slices of state also

export const getAllBoards = () => async (dispatch) => {
    const response = await fetch('/boards')

    if (response.ok) {
        const boardsList = await response.json();
        dispatch(getBoards(boardsList))
        return boardsList
    }
}


export const createBoard = boardDetails => async (dispatch) => {
    const response = await fetch('/boards/new', {
        method: 'POST',
        body: JSON.stringify(boardDetails)
    })
    if (response.ok) {
        const boardsList = await response.json();
        dispatch(getBoards(boardsList))
        // dispatch(addBoard(boardsList))
        return boardsList
    }
}


export const editBoardDetails = boardDetails => async (dispatch) => {
    const response = await fetch(`/boards/edit/${boardDetails.id}`, {
        method: 'POST',
        body: JSON.stringify(boardDetails)
    })
    if (response.ok) {
        const boardsList = await response.json()
        dispatch(getBoards(boardsList))
        // dispatch(editBoard(boardsList))
        return boardsList
    }
}


export const deleteOneBoard = id => async (dispatch) => {
    const response = await fetch(`/boards/delete/${id}`)

    if (response.ok) {
        const boardsList = await response.json();
        dispatch(getBoards(boardsList))
        return boardsList
    }
}


const initialState = {list: []}

const boardsReducer = (state = initialState, action) => {
    let newState;

    switch (action.type) {
        case GET_BOARDS: {
            return {list: action.boardsList}
            // const boardsList = action.boardsList,
            // newState = boardsList
            // return newState
        }
        case ADD_BOARDS: {
            const boardsList = action.boardsList,
            newState = boardsList
            return newState
        }
        case EDIT_BOARDS: {
            const boardsList = action.boardsList,
            newState = boardsList
            return newState
        }
        case DELETE_BOARDS: {
            const boardsList = action.boardsList,
            newState = boardsList
            return newState
        }
        default:
        return state
    }
}

export default boardsReducer;
