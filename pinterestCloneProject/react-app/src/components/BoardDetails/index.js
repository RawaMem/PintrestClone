import { useEffect, useState  } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import boardsReducer, { getBoardDetails, removeOnePinFromBoard } from '../../store/boards';
import { getAllPins } from '../../store/pins';
import Card from '../PictureCard';
import EditPinModal from '../PinBoardEditForm'
import EditBoardModal from '../EditBoard/EditBoardModal';
import './index.css'


export const BoardDetails = () => {
    const dispatch = useDispatch();
    const {boardId} = useParams()
    const currentBoard = useSelector(state => state.boards)
    // const allPinsObj = useSelector(state => state.pins)
    // const allPinsArray = Object.values(allPinsObj)
    // const pinsForThisBoard = allPinsArray?.filter(pin => currentBoard?.pins?.includes(pin.id))
    // console.log('======@@====>', currentBoard?.pins)


    const user = useSelector(state => {
        return state.session?.user
    })

    useEffect(() => {
        dispatch(getBoardDetails(boardId))
        dispatch(getAllPins())
    }, [dispatch])


    const handleRemovePinFromBoard = async(e) => {
        const payload = {
            boardId,
            pinId: e.target.value
        };
        dispatch(removeOnePinFromBoard(payload))
    };

    return (
        <>
            <div className="boards-details-page-container">
                <div className="board-info-container">
                    <h2 className="board-title-details">{currentBoard?.title}</h2>
                    <button className="user-info-button">{user?.first_name[0]}</button>
                    <p className="number-of-pins">{currentBoard?.pins?.length} Pins</p>

                </div>
                <div className="unorganized-pins-container">
                    {currentBoard?.pins?.map(pin => {
                        return (
                                <>
                                    <div className="image-user-container">

                                            <EditBoardModal />
                                            <button value={pin.id} onClick={handleRemovePinFromBoard} className="delete-pin-from-board">Delete from Board</button>

                                        <Link to={`/pins/${pin.id}`} className="user-pins-container">
                                            <Card
                                            src={pin?.media_url}
                                            alt={pin?.description}
                                            />
                                        </Link>
                                        <Link to="#" className="pin-owner">
                                            <div>{pin?.profileUser?.username}</div>
                                        </Link>
                                    </div>
                                </>
                        )
                    })}
                </div>
            </div>



        </>

    )
}
