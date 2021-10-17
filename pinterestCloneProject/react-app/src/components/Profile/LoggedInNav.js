import React from 'react'
import './LoggedInNav.css'
import PinterestIcon from '@material-ui/icons/Pinterest'
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@material-ui/icons/Person';
import './LoggedInNav.css'

export default function LoggedInNav() {
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
            <div className="spacing_search_person"></div>
            <div className="person_icon">
            <PersonIcon className="person_icon"/>
            <Link to="/profile"></Link>
            </div>
            
    
        </div>
        
    )
}
