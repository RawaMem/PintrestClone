const GET_BOARDS = 'boards/LOAD'
const ADD_BOARD = 'boards/ADD'
const EDIT_BOARD = 'boards/EDIT'
const DELETE_BOARD = 'boards/DELETE'


const getBoards = boardsObj => {
    return {
        type: GET_BOARDS,
        boardsObj
    }
}


const addBoard = newBoardObj => {
    return {
        type: ADD_BOARD,
        newBoardObj
    }
}


const editBoard = edittedBoardObj => {
    return {
        type: EDIT_BOARD,
        edittedBoardObj
    }
}


const deleteBoard = deletedBoardObj => {
    return {
        type: DELETE_BOARD,
        deletedBoardObj
    }
}

export const getAllBoards = () => async (dispatch) => {
    const response = await fetch('/boards')

    if (response.ok) {
        const boardsObj = await response.json();
        dispatch(getBoards(boardsObj))
        return boardsObj
    }
}


export const createBoard = boardDetails => async (dispatch) => {
    const response = await fetch('/boards/new', {
        method: 'POST',
        body: JSON.stringify(boardDetails)
    })
    if (response.ok) {
        const newBoardObj = await response.json();
        dispatch(addBoard(newBoardObj))
        return newBoardObj
    }
}


export const editBoardDetails = boardDetails => async (dispatch) => {
    const response = await fetch(`/boards/edit/${boardDetails.id}`, {
        method: 'POST',
        body: JSON.stringify(boardDetails)
    })
    if (response.ok) {
        const edittedBoardObj = await response.json()
        dispatch(editBoard(edittedBoardObj))
        return edittedBoardObj
    }
}


export const deleteOneBoard = id => async (dispatch) => {
    const response = await fetch(`/boards/delete/${id}`)

    if (response.ok) {
        const deletedBoardObj = await response.json();
        dispatch(deleteBoard(deletedBoardObj))
        return deletedBoardObj
    }
}


const initialState = {}

const boardsReducer = (state = initialState, action) => {
    let newState = {...state}

    switch (action.type) {
        case GET_BOARDS:
            return action.boardsObj

        case ADD_BOARD:
            newState[action.newBoardObj.id] = action.newBoardObj
            return newState

        case EDIT_BOARD:
            newState[action.edittedBoardObj.id] = action.edittedBoardObj
            return newState

        case DELETE_BOARD:
            delete newState[action.deletedBoardObj.id]
            return newState

        default:
        return state
    }
}

export default boardsReducer;
