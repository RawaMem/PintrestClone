import React from 'react'
import './LoggedInNav.css'
import PinterestIcon from '@material-ui/icons/Pinterest'
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@material-ui/icons/Person';
import './LoggedInNav.css'
import { useSelector } from 'react-redux';
import LogoutButton from '../auth/LogoutButton';


export default function LoggedInNav() {

    const user = useSelector(state => {
        return state.session?.user
    })

    return (
        <div className="wrapper">
            <div className="icon_button">
                <PinterestIcon style={{ fontSize: 30 }}/>
            </div>
            <Link to="/home">Home</Link>
            <div className="searchbar">
                <div className="search_icon">
                    <SearchIcon className="search_icon"/>
                </div>
                <input className="search_input" placeholder="Search" type="text" />
            </div>
            <div className="logout-btn-for-logged-in-nav-bar"><LogoutButton /></div>
            <div className="spacing_search_person"></div>
            <div className="person_icon">
            <Link to={`/profile/${user?.id}`}><PersonIcon className="person_icon"/></Link>
            </div>

        </div>

    )
}
