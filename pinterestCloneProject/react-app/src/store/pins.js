const GET_PINS = 'pins/GET_PINS'
const PIN_DETAIL = 'pins/PIN_DETAIL'
const ADD_PIN = 'pins/ADD_PIN'
const DELETE_PIN = 'pins/DELETE_PIN'
const EDIT_PIN = 'pins/EDIT_PIN'


const getPinsAction = pinsObj => {
    return {
        type: GET_PINS,
        pinsObj
    }
}

const pinDetailAction = pinDetailObj => {
    return {
        type: PIN_DETAIL,
        pinDetailObj
    }
}

const addPinAction = pinObj => {
    return {
        type: ADD_PIN,
        pinObj
    }
}

const deletePinAction = deletePinObj => {
    return {
        type: DELETE_PIN,
        deletePinObj
    }
}

const editPinAction = editPinObj => {
    return {
        type: EDIT_PIN,
        editPinObj
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

export const pinDetail = () => async(dispatch) => {
    const response = await fetch(`/pins/${id}`)
    let pinObj = await response.json()
    let pin_detail = pinObj.pin
    if (response.ok) {
        dispatch(pinDetailAction(pin_detail))
    }
}

export const addPin = pin => async(dispatch) => {
    const response = await fetch('/pins', {
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
    }

}
