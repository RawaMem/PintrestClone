import { useEffect, useState  } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllBoards } from '../../store/boards';
// import Modal from '@mui/material/Modal';


export const Profile = () => {

    const dispatch = useDispatch();

    const allBoardsObj = useSelector(state => state.boards)

    const allBoardsList = Object.values(allBoardsObj)


    const user = useSelector(state => {
        return state.session?.user
    })

    useEffect(() => {
        dispatch(getAllBoards())
    }, [dispatch])


    const [showMenu, setShowMenu] = useState(false);

    const openMenu = () => {
      if (showMenu) return;
      setShowMenu(true);
    };

    useEffect(() => {
      if (!showMenu) return;

      const closeMenu = () => {
        setShowMenu(false);
      };

      document.addEventListener('click', closeMenu);

      return () => document.removeEventListener("click", closeMenu);
    }, [showMenu]);


    return(
        <>
            <div className="mid-button-container">
            <button  className='big-profile-btn' onClick={openMenu}>Create</button>
            {showMenu && (
                <>
                <p className="creation">Create</p>
                <Link className='pop-up-button' to={`/pins/new`}>
                    <button className='create-pin-btn'>Pin</button>
                </Link>
                <Link className='pop-up-button' to={`/board-builder`}>
                    <button className='create-board-btn'>Board</button>
                </Link>


                </>

            )}

            </div>

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
