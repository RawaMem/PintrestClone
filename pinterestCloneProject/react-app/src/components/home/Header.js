import React from 'react'
import PinterestIcon from '@material-ui/icons/Pinterest'
// import IconButton from '@material-ui/core/IconButton'
// import styled from 'styled-components'
import './Header.css'
import {Select, MenuItem, FormControl, InputLabel} from "@material-ui/core"
import LoginFormModal from './LoginFormModal'
import SignUpFormModal from './SignUpFormModal'
import GitHubIcon from '@material-ui/icons/GitHub';


// const Wrapper = styled.div`
//     display:flex;
//     align-items: center;
//     height: 50px;
//     padding: 12px 4px 4px 16px; 
//     background-color: white;
//     color: black`

// const LogoWrapper = styled.div`
//     .MuiSvgIcon-root {
//         color: #e60023;
//         font-size: 66px;
//         cursor: pointer;
//     }`

export default function Header() {
    return (

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
            <div className="github">
                <GitHubIcon id="fanny"className="github_icon"style={{ fontSize: 25 }}/>
                <a className ="git_link" href="https://github.com/fanny-chan" target="_blank">Fanny</a>
                <a className ="git_link" href="https://github.com/RawaMem" target="_blank">Rawaha</a>
                <a className ="git_link" href="https://github.com/sherry-debug715" target="_blank">Sherry</a>
            </div>
            <div className="button_wrapper">
                {/* <div className="homepage_github">
                    <InputLabel>Github</InputLabel>
                    <Select>
                        <MenuItem>Sherry</MenuItem>
                        <MenuItem>Rawaha</MenuItem>
                        <MenuItem>Fanny</MenuItem>
                    </Select>
                </div> */}
                <div className="login_button">
                    <LoginFormModal />
                </div>
                <div className="signup_button">
                    <SignUpFormModal />
                </div>
            </div>
            <div className="icon_wrapper">

            </div>

        </div>
    )
}


