import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { pinDetail } from '../../store/pins';

const PinDetail = () => {

    const dispatch = useDispatch()
    const { pins } = useSelector(state => state.pins)
    const { pinId } = useParams()
   
    useEffect(() => {
        dispatch(pinDetail(pinId))
    }, [dispatch])

    return (
        <>
            <h1>PinDetail</h1>
        </>
    )
}


export default PinDetail
