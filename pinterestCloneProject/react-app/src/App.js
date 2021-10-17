import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import { authenticate } from './store/session';
import PinsDisplay from './components/PinsDisplay';
import { Profile } from './components/Profile';
import PinDetail from './components/PinDetail';
import { BoardDetails } from './components/BoardDetails';
import CreatePinForm from './components/CreatePin';
import { CreateBoard } from './components/CreateBoard';
import { EditBoard } from './components/EditBoard';
import Header from './components/home/Header';
import LoggedInNav from './components/Profile/LoggedInNav';


function App() {

  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();


  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
    <NavBar />
      <Switch>
        <Route path='/' exact={true}>
        <Header />
        </Route>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path='/users' exact={true} >
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>
        <ProtectedRoute path='/profile/:currentProfileId' exact={true} >
          <Profile />
        </ProtectedRoute>
        <ProtectedRoute path='/boards/:boardId' exact={true} >
          <BoardDetails />
        </ProtectedRoute>
        <ProtectedRoute path='/' exact={true} >
          <h1>My Home Page</h1>
        </ProtectedRoute>
        <Route exact path='/home'>
          <LoggedInNav />
          <PinsDisplay />
        </Route>
        <Route exact path='/pins/:pinId'>
          <PinDetail />
        </Route>
        <Route exact path='/pin-builder'>
          <CreatePinForm />
        </Route>
        {/* <ProtectedRoute path='/board-builder' exact={true} >
          <CreateBoard />
        </ProtectedRoute> */}
        <ProtectedRoute path='/board-edit/:boardId' exact={true} >
          <EditBoard />
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
