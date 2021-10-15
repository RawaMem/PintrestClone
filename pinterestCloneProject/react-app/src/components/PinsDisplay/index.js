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
    // console.log(boardsArray);

    // const allPinBoard = boardsArray.filter(board => (currentUser?.id === board?.user_id && board?.title === "All Pins"))
    // const boardId = allPinBoard[0]
    // console.log("====================> all @@@@@@", boardId.id)
    const [ pinId, setPinId ] = useState();

    useEffect(() => {
        dispatch(getAllBoards())
    }, [dispatch]);

    // const handleAddPinToBoard = async(e) => {
    //     e.preventDefault();
    //     const payload = {
    //         boardId:boardId.id,
    //         pinId
    //     };
    //     setPinId(e.target.value);
    //     dispatch(addPinToBoard(payload))
    // };

    // console.log("this is pins",pins)
    const allPins = Object.values(pins)?.map(pin => (
        <div key={pin.id} className="picture-card-display">
            <div className="pins-display-container">
                {/* <button value= {pin.id} className="save-button" onClick={handleAddPinToBoard}>
                    Save
                </button> */}
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
