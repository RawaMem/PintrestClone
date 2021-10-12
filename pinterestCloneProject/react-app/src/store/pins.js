const GET_PINS = 'pins/GET_PINS'
const PIN_DETAIL = 'pins/PIN_DETAIL'
const ADD_PIN = 'pins/ADD_PIN'
const DELETE_PIN = 'pins/DELETE_PIN'
const EDIT_PIN = 'pins/EDIT_PIN'


const getPinsAction = pinsObj => {
    return {
        type: GET_PINS,
        payload: pinsObj
    }
}

const pinDetailAction = pinDetailObj => {
    return {
        type: PIN_DETAIL,
        payload: pinDetailObj
    }
}

const addPinAction = pinObj => {
    return {
        type: ADD_PIN,
        payload: pinObj
    }
}

const deletePinAction = deletePinObj => {
    return {
        type: DELETE_PIN,
        payload: deletePinObj
    }
}

const editPinAction = editPinObj => {
    return {
        type: EDIT_PIN,
        payload: editPinObj
    }
}

// Thunks
export const getAllPins = () => async(dispatch) => {
    const response = await fetch('/')
    let pinsObj = await response.json()
    let pinsArr = pinsObj.pins
    if (response.ok) {
        dispatch(getPinsAction(pinsArr))
    }
}

export const pinDetail = (id) => async(dispatch) => {
    const response = await fetch(`/pins/${id}`)
    let pinObj = await response.json()
    let pin_detail = pinObj.pin
    if (response.ok) {
        dispatch(pinDetailAction(pin_detail))
    }
}

export const addPin = pin => async(dispatch) => {
    const response = await fetch('/pins/add', {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(pin)
    })

    if (response.ok) {
        let newPin = await response.json()
        dispatch(addPinAction(newPin))
    }
}

export const editPin = pin => async(dispatch) => {
    const response = await fetch(`/pins/edit/${pin.id}`, {
        method: 'PATCH',
        body: JSON.stringify(pin)
    })

    if (response.ok) {
        let editedPin = await response.json()
        dispatch(editPinAction(editedPin))
        return editedPin
    }
}

export const deletePin = id => async(dispatch) => {
    const response = await fetch(`/pins/delete/${id}`, {
        method: 'DELETE',
        body: JSON.stringify(id)
    })
    if (response.ok) {
        dispatch(pinDetailAction(id))
    }
}


// Reducer
const initialState = {}

export default function pinsReducer(state = initialState, action){
    const newState = { ...state }
    switch(action.type) {
        case GET_PINS:
            return action.payload
        case PIN_DETAIL:
            return action.payload
        case ADD_PIN:
            newState[action.payload.id] = action.payload
            return newState
        case EDIT_PIN:
            newState[action.payload.id] = action.payload
        case DELETE_PIN:
            delete newState[action.payload.id]
            return newState
        default:
            return state
    }

}
