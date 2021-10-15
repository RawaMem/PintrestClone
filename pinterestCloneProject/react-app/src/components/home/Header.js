import React from 'react'
import PinterestIcon from '@material-ui/icons/Pinterest'
import IconButton from '@material-ui/core/IconButton'
import styled from 'styled-components'
import './Header.css'


export default function Header() {
    return (
        // <Wrapper>
        //     <LogoWrapper>
        //         <IconButton>
        //             <PinterestIcon/>
        //         </IconButton>

        //     </LogoWrapper>
        //     {/* <HomePageButton>

        //     </HomePageButton>
        //     <FollowingButton>

        //     </FollowingButton>
        //     <SearchWrapper>
        //         <SearchBar>

        //         </SearchBar>
        //     </SearchWrapper>
        //     <IconsWrapper>

        //     </IconsWrapper>*/}
        // </Wrapper> 
        <div className="wrapper">
            <div className ="logo_wrapper">
                <div className="icon_button">
                    <PinterestIcon style={{ fontSize: 40 }}/>
                </div>
                <div className="logo-script">
                    SafetyPinterest
                </div>
            </div>
            <div className="homepage_github">
            {/* <a href=>

            </a> */}
            </div>
            <div className="following_button">

            </div>
            <div className="search_wrapper">
                <div className="search_bar">

                </div>
            </div>
            <div className="icon_wrapper">

            </div>

        </div>
    )
}

const Wrapper = styled.div`
    display:flex;
    align-items: center;
    height: 50px;
    padding: 12px 4px 4px 16px; 
    background-color: white;
    color: black`

const LogoWrapper = styled.div`
    .MuiSvgIcon-root {
        color: #e60023;
        font-size: 66px;
        cursor: pointer;
    }`