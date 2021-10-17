import React from 'react'
import './LoggedInNav.css'
import PinterestIcon from '@material-ui/icons/Pinterest'
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import './LoggedInNav.css'

export default function LoggedInNav() {
    return (
        <div className="wrapper">   
            <div className="icon_button">
                <PinterestIcon style={{ fontSize: 30 }}/>
            </div>
            <Link to="/home">Home</Link>
            <div className="searchbar">
                <div className="icon"><SearchIcon /></div>
                <input className="search_input" placeholder="Search" type="text" />
            </div>
    
        </div>
        
    )
}
