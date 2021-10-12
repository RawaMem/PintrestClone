import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { pinDetail } from '../../store/pins';

const PinDetail = () => {

    const dispatch = useDispatch()
    const  pins = useSelector(state => state.pins)
    const { pinId } = useParams()

    useEffect(() => {
        dispatch(pinDetail(pinId))
    }, [dispatch])

    return (
        <>
            <h1>PinDetail</h1>
            <div className="image-container">
                <img className="pin-detail-image" src={pins?.pin?.media_url} alt={pins?.pin?.description} />
            </div>
            <div className="title-container">
                <h3>{pins?.pin?.title}</h3>
            </div>
            <div className="description-container">
                <p>{pins?.pin?.description}</p>
            </div>
        </>
    )
}


export default PinDetail
