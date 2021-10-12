import { useEffect, useState  } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getBoardDetails } from '../../store/boards';


export const BoardDetails = () => {

    const dispatch = useDispatch();

    const {boardId} = useParams()

    const currentBoard = useSelector(state => state.boards)

    const user = useSelector(state => {
        return state.session?.user
    })

    useEffect(() => {
        dispatch(getBoardDetails(boardId))
    }, [dispatch])

    return (
        <>
            <div className="board-info-container">
                <button className="board-title">{currentBoard?.title}</button>
                <button className="user-info-button">{user?.first_name[0]}</button>

            </div>


        </>

    )
}
