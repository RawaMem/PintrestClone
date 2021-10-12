import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllPins } from '../../store/pins'


const PinsDisplay = () => {

    const dispatch = useDispatch();
    const pins = useSelector(store => store.pins)

    // console.log("this is pins",pins)
    const allPins = Object.values(pins)
    console.log('===========>', allPins)
    
    useEffect(() => {
        dispatch(getAllPins())
    }, [dispatch])

    // map(pin => (
    //     <div key={pin.id} className="each-pin">
    //         <Link to={`/pins/${pin.id}`}>
    //             <img className="pin-image" src={pin.media_url} alt={pin.description} />
    //         </Link>
    //         <Link to="#" className="pin-owner">
    //             <div>{pin.user}</div>
    //         </Link>
    //     </div>
    // ))

    return (
        <>
            <div className="pins-container">
                {allPins}
            </div>
        </>
    )
}


export default PinsDisplay
