import { createBoard } from "./boards";

// constants
const SET_USER = 'session/SET_USER';
const REMOVE_USER = 'session/REMOVE_USER';
const PROFILE_OF_USER = 'session/PROFILE_OF_USER'
const FOLLOW = 'session/FOLLOW;';
const UNFOLLOW = 'session/FOLLOW;';

const setUser = (user) => ({
  type: SET_USER,
  payload: user
});

const removeUser = () => ({
  type: REMOVE_USER,
})

const userProfile = (userObj) => ({
  type: PROFILE_OF_USER,
  userObj
});

const follow = (userObj) => ({
  type: FOLLOW,
  userObj
});

const unfollow = (userObj) => ({
  type: UNFOLLOW,
  userObj
});

const initialState = { user: null, profileOfUser: null };


export const getUserprofile = (id) => async(dispatch) => {
  const response = await fetch(`/api/auth//user-profile/${id}`)
  if (response.ok) {
      let userObj = await response.json()
      dispatch(userProfile(userObj))
      return userObj
  }
}


export const authenticate = () => async (dispatch) => {
  const response = await fetch('/api/auth/', {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  if (response.ok) {
    const data = await response.json();
    if (data.errors) {
      return;
    }

    dispatch(setUser(data));
  }
}

export const login = (email, password) => async (dispatch) => {
  const response = await fetch('/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password
    })
  });

  if (response.ok) {
    const data = await response.json();
    dispatch(setUser(data))
    return null;
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ['An error occurred. Please try again.']
  }

}

export const logout = () => async (dispatch) => {
  const response = await fetch('/api/auth/logout', {
    headers: {
      'Content-Type': 'application/json',
    }
  });

  if (response.ok) {
    dispatch(removeUser());
  }
};


export const signUp = (first_name, last_name, username, email, password) => async (dispatch) => {
  const response = await fetch('/api/auth/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      first_name,
      last_name,
      username,
      email,
      password,
    }),
  });

  if (response.ok) {
    const data = await response.json();
    dispatch(setUser(data))
    const payload = {
      user_id: data.id,
      title: 'All Pins',
      description: 'All Pins',
      private: null
    };
    dispatch(createBoard(payload))
    return null;
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ['An error occurred. Please try again.']
  }
}


export const followUser = userIds => async (dispatch) => {
  const response = await fetch(`/api/follow-user/${userIds.userid}/${userIds.followingid}`, {
      method: 'POST',
      headers: {
          'Content-Type':'application/json'
      },
      body: JSON.stringify(userIds)
  })
  if (response.ok) {
      const userObj = await response.json();
      dispatch(follow(userObj))
      return userObj
  }
}


export const unfollowUser = userIds => async (dispatch) => {
  const response = await fetch(`/api/follow-user/${userIds.userid}/${userIds.followingid}`, {
      method: 'POST',
      headers: {
          'Content-Type':'application/json'
      },
      body: JSON.stringify(userIds)
  })
  if (response.ok) {
      const userObj = await response.json();
      dispatch(unfollow(userObj))
      return userObj
  }
}




export default function reducer(state = initialState, action) {
  let newState = {...state}
  switch (action.type) {
    case SET_USER:
      return { user: action.payload }
    case PROFILE_OF_USER:
      newState.profileOfUser = action.userObj
      return newState
    case REMOVE_USER:
      return { user: null }
    case FOLLOW:
      return { user: action.userObj }
    case UNFOLLOW:
      return { user: action.userObj }
    default:
      return state;
  }
}
