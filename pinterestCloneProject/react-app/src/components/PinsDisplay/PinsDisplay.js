import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { Link, Route, useParams } from 'react-router-dom';
import { getAllPins } from '../../store/pins'


const PinsDisplay = () => {

    const dispatch = useDispatch();
    
    return (
        <>
            <h1>Pins page</h1>
        </>
    )
}


export default PinsDisplay
