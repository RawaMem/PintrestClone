import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { followUser, getUserprofile, unfollowUser } from '../../store/session';


export const Following = ({ currentProfileId }) => {

    const dispatch = useDispatch();

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
        dispatch(getUserprofile(currentProfileId))
    }, [currentProfileId])

    const handleFollow = async(e) => {
        e.preventDefault();
        const payload = {
            userid: user.id,
            followingid: e.target.value
        };
        dispatch(followUser(payload))
      };

      const handleUnfollow = async(e) => {
        e.preventDefault();
        const payload = {
            userid: user.id,
            followingid: e.target.value
        };
        dispatch(unfollowUser(payload))
    };

    return(
        <>
            <div className="following-container">
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
    )
}

export default Following;
