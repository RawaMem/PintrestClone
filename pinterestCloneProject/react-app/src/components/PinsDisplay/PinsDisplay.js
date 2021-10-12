import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { Link, Route, useParams } from 'react-router-dom';
import { getAllPins } from '../../store/pins'


const PinsDisplay = () => {

    const dispatch = useDispatch();
    const pins = useSelector(store => store.pins)

    // console.log("this is pins",pins)

    useEffect(() => {
        dispatch(getAllPins())
    }, [dispatch])

    if (!pins) {
        return null;
    }

    const allPins = Object.values(pins)?.map(pin => (
        <div key={pin.id} className="each-pin">
            <Link to={`/pins/${pin.id}`}>
                <img className="pin-image" src={pin.media_url} alt={pin.description} />
            </Link>
            <Link to="#" className="pin-owner">
                <div></div>
            </Link>
        </div>
    ))

    return (
        <>
            <div className="pins-container">
                {/* {pins.map(pin => {
                    let image_url = pin.media_url;
                    return (
                        <div className="pin-container" key={pin.id}>
                            <Link to={`/pins/${pin.id}`}>

                            </Link>
                        </div>
                    )
                })} */}

            </div>
        </>
    )
}


export default PinsDisplay
