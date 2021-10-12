import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { Link, Route, useParams } from 'react-router-dom';
import { getAllPins } from '../../store/pins'


const PinsDisplay = () => {

    const dispatch = useDispatch();
    const pins = useSelector(state => {
        return state.pins
    })

    useEffect(() => {
        dispatch(getAllPins())
    }, [dispatch])

    if (!pins) {
        return null;
    }

    return (
        <>
            <div className="pins-container">

            </div>
        </>
    )
}


export default PinsDisplay
