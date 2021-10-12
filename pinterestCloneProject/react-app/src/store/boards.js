// import { csrfFetch } from "./csrf";

// const GET_BOARDS = 'boards/LOAD'
// const ADD_BOARDS = 'boards/ADD'
// const EDIT_BOARDS = 'boards/EDIT'
// const DELETE_BOARDS = 'boards/DELETE'


// const getBoards = boardsObject => {
//     return {
//         type: GET_BOARDS,
//         boardsObject
//     }
// }


// const addBoard = boardsObject => {
//     return {
//         type: ADD_BOARDS,
//         boardsObject
//     }
// }


// const editBoard = boardsObject => {
//     return {
//         type: EDIT_BOARDS,
//         boardsObject
//     }
// }


// const deleteBoard = boardsObject => {
//     return {
//         type: DELETE_BOARDS,
//         boardsObject
//     }
// }


// export const getAllBoards = () => async (dispatch) => {
//     const response = await csrfFetch('/boards')

//     if (response.ok) {
//         const boardsObject = await response.json();
//         dispatch(getBoards(boardsObject))
//         return boardsObject
//     }
// }


// export const createBoard = boardDetails => async (dispatch) => {
//     const response = await csrfFetch('/boards/new', {
//         method: 'POST',
//         body: JSON.stringify(boardDetails)
//     })
//     if (response.ok) {
//         const boardsObject = await response.json();
//         dispatch(addBoard(boardsObject))
//         return boardsObject
//     }
// }


// export const editBoardDetails = boardDetails => async (dispatch) => {
//     const response = await csrfFetch(`/boards/edit/${boardDetails.id}`, {
//         method: 'POST',
//         body: JSON.stringify(boardDetails)
//     })
//     if (response.ok) {
//         const boardsObject = await response.json()
//         dispatch(editBoard(boardsObject))
//         return boardsObject
//     }
// }


// export const deleteOneBoard = id => async (dispatch) => {
//     const response = await csrfFetch(`/boards/delete/${id}`)

//     if (response.ok) {
//         const boardsObject = await response.json();
//         dispatch(getBoards(boardsObject))
//     }
// }


// const initialState = {}

// const boardsReducer = (state = initialState, action) => {
//     let newState;

//     switch (action.type) {
//         case GET_BOARDS: {
//             const boardsObject = action.boardsObject,
//             newState = boardsObject
//             return newState
//         }
//         case ADD_BOARDS: {
//             const boardsObject = action.boardsObject,
//             newState = boardsObject
//             return newState
//         }
//         case EDIT_BOARDS: {
//             const boardsObject = action.boardsObject,
//             newState = boardsObject
//             return newState
//         }
//         case DELETE_BOARDS: {
//             const boardsObject = action.boardsObject,
//             newState = boardsObject
//             return newState
//         }
//         default:
//         return state
//     }
// }

// export default boardsReducer;
