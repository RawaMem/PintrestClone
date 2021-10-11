import { csrfFetch } from "./csrf";

const GET_BOARDS = 'boards/LOAD'
const ADD_BOARDS = 'boards/ADD'
const EDIT_BOARDS = 'boards/EDIT'
const DELETE_BOARDS = 'boards/DELETE'


const getBoards = boardsObject => {
    return {
        type: GET_BOARDS,
        boardsObject
    }
}


const addBoard = newBoard => {
    return {
        type: ADD_BOARDS,
        newBoard
    }
}


const editBoard = newBoard => {
    return {
        type: EDIT_BOARDS,
        newBoard
    }
}


const deleteBoard = id => {
    return {
        type: DELETE_BOARDS,
        id
    }
}


export const getAllBoards = () => async (dispatch) => {
    const response = await csrfFetch('/boards')

    if (response.ok) {
        const boardsObject = await response.json();
        dispatch(getBoards(boardsObject))
    }
}


export const createBoard = boardDetails => async (dispatch) => {
    const response = await csrfFetch('/boards/new', {
        method: 'POST',
        body: JSON.stringify(boardDetails)
    })
    if (response.ok) {
        const newBoard = await response.json();
        dispatch(addBoard(newBoard))
        return newBoard
    }
}


export const editBoardDetails = boardDetails => async (dispatch) => {
    const response = await csrfFetch(`/boards/edit/${boardDetails.id}`, {
        method: 'POST',
        body: JSON.stringify(boardDetails)
    })
    if (response.ok) {
        const newBoard = await response.json()
        dispatch(editBoard(newBoard))
        return newBoard
    }
}


export const deleteOneBoard = id => async (dispatch) => {
    const response = await csrfFetch(`/boards/delete/${id}`)

    if (response.ok) {
        const boardsObject = await response.json();
        dispatch(getBoards(boardsObject))
    }
}


const initialState = {}
