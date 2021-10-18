import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getAllBoards } from '../../store/boards';
import EditPinModal from '../PinBoardEditForm';
import { getAllPins } from '../../store/pins';
import Card from '../PictureCard';
import './profile.css';
import { followUser, getUserprofile, unfollowUser } from '../../store/session';
import CreateBoardModal from '../CreateBoard/createBoardModal';
import AddIcon from '@mui/icons-material/Add';
import CreateIcon from '@mui/icons-material/Create';
import IosShareIcon from '@mui/icons-material/IosShare';

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


    const listOfUserObjsProfileIsFollowing = allUsers?.filter(user => user?.followers?.includes(profileUser?.id))

    useEffect(() => {

        dispatch(getAllBoards())
        dispatch(getAllPins())
        dispatch(getUserprofile(currentProfileId))
    }, [dispatch, currentProfileId, user])


    // create pop up menu
    const [showMenuCreate, setShowMenuCreate] = useState(false);
    const openMenuCreate = () => {
      if (showMenuCreate) return;
      setShowMenuCreate(true);
    };
    useEffect(() => {
      if (!showMenuCreate) return;
      const closeMenuCreate = () => {
        setShowMenuCreate(false);
      };
      document.addEventListener('click', closeMenuCreate);
      return () => document.removeEventListener("click", closeMenuCreate);
    }, [showMenuCreate]);


    // followers pop up menu
    const [showMenuFollowers, setShowMenuFollowers] = useState(false);
    const openMenuFollowers = () => {
      if (showMenuFollowers) return;
      setShowMenuFollowers(true);
    };
    useEffect(() => {
      if (!showMenuFollowers) return;
      const closeMenuFollowers = () => {
        setShowMenuFollowers(false);
      };
      document.addEventListener('click', closeMenuFollowers);
      return () => document.removeEventListener("click", closeMenuFollowers);
    }, [showMenuFollowers]);


    // following pop up menu
    const [showMenuFollowing, setShowMenuFollowing] = useState(false);
    const openMenuFollowing = () => {
      if (showMenuFollowing) return;
      setShowMenuFollowing(true);
    };
    useEffect(() => {
      if (!showMenuFollowing) return;
      const closeMenuFollowing = () => {
        setShowMenuFollowing(false);
      };
      document.addEventListener('click', closeMenuFollowing);
      return () => document.removeEventListener("click", closeMenuFollowing);
    }, [showMenuFollowing]);


    const handleFollow = async(e) => {
        e.preventDefault();
        e.stopPropagation();
        const payload = {
            userid: user.id,
            followingid: e.target.value
        };
        dispatch(followUser(payload))
      };


    const handleUnfollow = async(e) => {
        e.preventDefault();
        e.stopPropagation();
        const payload = {
            userid: user.id,
            followingid: e.target.value
        };
        dispatch(unfollowUser(payload))
    };

    const pic1 = (board) => {
        const picObj = board.pins[0]
        if (picObj) {
            return picObj.media_url
        } else {
            return 'https://htmlcolorcodes.com/assets/images/colors/light-gray-color-solid-background-1920x1080.png'
        }
    }
    const pic2 = (board) => {
        const picObj = board.pins[1]
        if (picObj) {
            return picObj.media_url
        } else {
            return 'https://htmlcolorcodes.com/assets/images/colors/light-gray-color-solid-background-1920x1080.png'
        }
    }
    const pic3 = (board) => {
        const picObj = board.pins[2]
        if (picObj) {
            return picObj.media_url
        } else {
            return 'https://htmlcolorcodes.com/assets/images/colors/light-gray-color-solid-background-1920x1080.png'
        }
    }


    return(
        <>
            <div className="page-container">
                <section className="section-1">
                    <div className="user-info-container">
                        <button className="user-initial-button">{profileUser?.first_name[0]}</button>
                        <h1 className="full-name">{profileUser?.first_name} {profileUser?.last_name}</h1>
                        <p className="at-username">@{profileUser?.username}</p>
                        <div className="following-container">
                            <div className="follower-list-container">
                                <p className="followers" onClick={openMenuFollowers}>{profileUser?.followers.length} Following</p>
                                {showMenuFollowers && (
                                    <>
                                        <div className="popup-container-for-followers">
                                            {allFollowersOfCurrentProfile.map(follower => {
                                                return (
                                                    <div className="popup-follower-row">
                                                        <p className="follower-name">{follower.username}</p>
                                                        {user?.followers?.includes(follower?.id) && (
                                                        <button className="follow-toggle-btn" onClick={handleUnfollow} value={follower?.id}>Unfollow</button>
                                                        )}
                                                        {!user?.followers?.includes(follower?.id) && (
                                                        <button className="follow-toggle-btn" onClick={handleFollow} value={follower?.id}>Follow</button>
                                                        )}
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </>
                                )}
                            </div>

                            <div className="follower-list-container">
                                <p className="followers" onClick={openMenuFollowing}>{listOfUserObjsProfileIsFollowing?.length} Followers</p>
                                {showMenuFollowing && (
                                    <>
                                        <div className="popup-container-for-followers">
                                            {listOfUserObjsProfileIsFollowing.map(follower => {
                                                return (
                                                        <div className="popup-follower-row">
                                                            <p className="follower-name">{follower.username}</p>
                                                            {user?.followers?.includes(follower?.id) && (
                                                            <button className="unfollow-toggle-btn" onClick={handleUnfollow} value={follower?.id}>Unfollow</button>
                                                            )}
                                                            {!user?.followers?.includes(follower?.id) && (
                                                            <button className="follow-toggle-btn" onClick={handleFollow} value={follower?.id}>Follow</button>
                                                            )}
                                                        </div>
                                                )
                                            })}
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section2">
                    <div className="icon-section">
                        <div className="button-left">
                            <button className="edit-profile">
                                <CreateIcon style={{ color: "#111111"}} fontSize="medium" />
                            </button>
                            <button className="share-board-icon">
                                <IosShareIcon style={{ color: "#111111"}} fontSize="medium" />
                            </button>
                        </div>
                        <div className="button-right">
                            <button  className='big-profile-btn' onClick={openMenuCreate}>
                                <AddIcon style={{ color: "#111111"}}/>
                            </button>
                        </div>
                    </div>

                    <div className="boards-container">
                        <div className="boards-container1">
                            {user && profileUser && user.id === profileUser.id && (
                                <div className="mid-button-container">

                                    {showMenuCreate && (
                                        <>
                                            <p className="creation">Create</p>
                                            <Link className='pop-up-button' to={`/pin-builder`}>
                                                <button className='create-pin-btn'>Pin</button>
                                            </Link>
                                            <div className="create-board-container">
                                                <CreateBoardModal />
                                            </div>
                                        </>
                                    )}
                                </div>
                                )}
                        </div>
                        <div className="boards-container2">
                            {allBoardsList.map(board => {
                                return (
                                    +board?.user_id === +profileUser?.id ? (
                                        <>
                                            <Link className='board-card-link' to={`/boards/${board?.id}`}>
                                            <div className="board-card">
                                                <div className="left-board-container"><img className="left-board-pic" src={pic1(board)} alt='pic1'/></div>
                                                <div className="right-pic-stack">
                                                    <div className="upper-board-container"><img className="upper-board-pic" src={pic2(board)} alt='pic2'/></div>
                                                    <div className="lower-board-container"><img className="lower-board-pic" src={pic3(board)} alt='pic3'/></div>
                                                </div>
                                            </div>
                                            <p className="board-title">{board?.title}</p>
                                            </Link>


                                        </>
                                    ) : false

                                )
                            })}

                        </div>
                    </div>
                </section>
                <section className="section-3">
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
                                                <div>{pin?.user?.username}</div>
                                            </Link>
                                        </div>
                                    </>
                                ):false
                            )
                        })}
                    </div>
                </section>
            </div>
        </>

    )
}
