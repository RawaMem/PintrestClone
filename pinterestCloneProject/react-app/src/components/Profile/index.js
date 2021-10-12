import { useEffect  } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllBoards } from '../../store/boards';


export const Profile = () => {

    const dispatch = useDispatch();

    const allBoardsObj = useSelector(state => state.boards)

    const allBoardsList = Object.values(allBoardsObj)
    console.log('=======>', allBoardsList)

    const user = useSelector(state => {
        return state.session?.user
    })


    useEffect(() => {
        dispatch(getAllBoards())
    }, [dispatch])

    return(
        <>
            <div className="user-info-container">
                <button className="user-info-button">{user?.first_name[0]}</button>
                <h1 className="full-name">{user?.first_name} {user?.last_name}</h1>
                <p className="at-username">@{user?.username}</p>
                <p className="followers"></p>
            </div>
            <div className="boards-container">
                {allBoardsList.map(board => {
                    return (
                        +board?.user_id === +user?.id ? (
                            <>
                                <div className="board-card">
                                    <p className="board-title">{board?.title}</p>
                                </div>


                            </>
                        ) : false

                    )
                })}
            </div>

        </>

    )
}
