import { useEffect, useState  } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import boardsReducer, { getBoardDetails } from '../../store/boards';
import { getAllPins } from '../../store/pins';
import Card from '../PictureCard';
import EditPinModal from '../PinBoardEditForm';


export const BoardDetails = () => {

    const dispatch = useDispatch();

    const {boardId} = useParams()

    const currentBoard = useSelector(state => state.boards)
    const allPinsObj = useSelector(state => state.pins)
    const allPinsArray = Object.values(allPinsObj)

    // const pinsForThisBoard = allPinsArray?.filter(pin => currentBoard?.pins?.includes(pin.id))
    // console.log('======@@====>', currentBoard?.pins)


    const user = useSelector(state => {
        return state.session?.user
    })

    useEffect(() => {
        dispatch(getBoardDetails(boardId))
        dispatch(getAllPins())
    }, [dispatch])

    return (
        <>
            <div className="board-info-container">
                <button className="board-title">{currentBoard?.title}</button>
                <button className="user-info-button">{user?.first_name[0]}</button>

            </div>
            <div className="unorganized-pins-container">
                {currentBoard?.pins?.map(pin => {
                    return (
                            <>
                                <div className="image-user-container">

                                        <div className="pin-edit">
                                            <EditPinModal pin={pin}/>
                                        </div>

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



        </>

    )
}
