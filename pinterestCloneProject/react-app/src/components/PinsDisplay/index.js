import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllPins } from '../../store/pins';
import { getAllBoards, addPinToBoard } from '../../store/boards';

import Card from '../PictureCard';
import './pinsDisplay.css'


const PinsDisplay = () => {

    const dispatch = useDispatch();
    const pins = useSelector(store => store.pins)
    const boardsObj = useSelector(state => state?.boards)
    const currentUser = useSelector( state => state.session.user);
    const boardsArray = Object.values(boardsObj);
    console.log(boardsArray);

    const allPinBoardId = 


    useEffect(() => {
        dispatch(getAllBoards())
    }, [dispatch]);

    // const handleAddPinToBoard = async(e) => {
    //     e.preventDefault();
    //     const payload = {
    //         boardId,
    //         pinId: pin.id
    //     };
    //     console.log('======@@@@@@@@=====>', boardId)
    //     console.log('======@@@@@@@@=====>', pin?.pin?.id)
    //     dispatch(addPinToBoard(payload))
    // };

    // console.log("this is pins",pins)
    const allPins = Object.values(pins)?.map(pin => (
        <div key={pin.id} className="picture-card-display">
            <div className="pins-display-container">

                <Link to={`/pins/${pin?.id}`}>
                    <Card
                    src={pin?.media_url}
                    alt={pin?.description}
                    />
                </Link>
                <Link to={`/profile/${pin?.user?.id}`} className="pin-owner">
                    <div>{pin?.user?.username}</div>
                </Link>
            </div>
        </div>
    ))


    useEffect(() => {
        dispatch(getAllPins())
    }, [dispatch])



    return (
        <>
            <div className="pins-container">
                {allPins}
            </div>
            <div className="button-container">
                <Link to={`/pin-builder`}>
                    Create a Pin
                </Link>
            </div>
        </>
    )
}


export default PinsDisplay
