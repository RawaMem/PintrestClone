import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getAllBoards } from '../../store/boards';
import EditPinModal from '../PinEditForm';
import { getAllPins } from '../../store/pins';
import Card from '../PictureCard';
import './profile.css';
import { getUserprofile } from '../../store/session';
// import Modal from '@mui/material/Modal';



export const Profile = () => {

    const dispatch = useDispatch();

    const { currentProfileId } = useParams()

    const allBoardsObj = useSelector(state => state.boards)

    const allBoardsList = Object.values(allBoardsObj)

    const allPinsObj = useSelector(state => state.pins)

    const allPinsArray = Object.values(allPinsObj)
    // console.log("========================>pinsArray",allPinsArray)

    const user = useSelector(state => {
        return state.session?.user
    })

    const profileUser = useSelector(state => {
        return state.session?.profileOfUser
    })

    const [allUsers, setUsers] = useState([]);

    useEffect(() => {
        async function fetchData() {
        const response = await fetch('/api/users/');
        const responseData = await response.json();
        setUsers(responseData.users);
        }
        fetchData();
    }, []);

    const allFollowersOfCurrentProfile = allUsers?.filter(user => profileUser?.followers?.includes(user?.id))
    console.log('========> all followers', allFollowersOfCurrentProfile)

    const listOfUserObjsWeAreFollowing = allUsers?.filter(user => user?.followers?.includes(profileUser?.id))
    console.log('========> all users that we are following', listOfUserObjsWeAreFollowing)





    useEffect(() => {
        dispatch(getAllBoards())
        dispatch(getAllPins())
        dispatch(getUserprofile(currentProfileId))
    }, [dispatch, currentProfileId])


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
            {user && profileUser && user.id === profileUser.id && (
            <div className="mid-button-container">
                <button  className='big-profile-btn' onClick={openMenu}>Create</button>
                {showMenu && (
                    <>
                        <p className="creation">Create</p>
                        <Link className='pop-up-button' to={`/pin-builder`}>
                            <button className='create-pin-btn'>Pin</button>
                        </Link>
                        <Link className='pop-up-button' to={`/board-builder`}>
                            <button className='create-board-btn'>Board</button>
                        </Link>
                    </>

                )}
            </div>
            )}

            <div className="user-info-container">
                <button className="user-info-button">{profileUser?.first_name[0]}</button>
                <h1 className="full-name">{profileUser?.first_name} {profileUser?.last_name}</h1>
                <p className="at-username">@{profileUser?.username}</p>
                <p className="followers">Followers: {profileUser?.followers.length}</p>
            </div>
            <div className="boards-container">
                {allBoardsList.map(board => {
                    return (
                        +board?.user_id === +profileUser?.id ? (
                            <>
                                <div className="board-card">
                                    <p className="board-title">{board?.title}</p>
                                </div>


                            </>
                        ) : false

                    )
                })}
            </div>
            <div className="unorganized-pins-container">
                {allPinsArray?.map(pin => {
                    return (
                        +pin?.user_id === +profileUser?.id ? (
                            <>
                                <div className="image-user-container">
                                    {user && profileUser && user.id === profileUser.id && (
                                        <div className="pin-edit">
                                            <EditPinModal pin={pin}/>
                                        </div>
                                    )}
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
                        ):false
                    )
                })}
            </div>


        </>

    )
}
