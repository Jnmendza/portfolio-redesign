import React from 'react';
import Fade from 'react-reveal/Fade';
import data from '../yourdata'
import Logo from '../jm.svg'

import { makeStyles } from '@material-ui/core/styles';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import {IconButton} from '@material-ui/core';

const useStyles = makeStyles({
    headingBackground: {
        position: 'fixed',
        opacity: 0.05,
        fontSize: '25em',
        left:'-0.2em',
        top:'-0.5em',
        zIndex: -100,
        color:'gray',     
    },
    logo: {
        width: '12%',
        height: '12%',
    },
    headerTitle: {
        position: 'relative',
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '3em',
        textAlign: 'left',
        top:'2em',        
    },
    button: {
        marginTop: '50px',
        cursor: 'pointer',
        color:'white',
        background: 'blue',
        border: '0px',
        padding: '1em 3em',
        transition: 'all 0.2s ease-out',
        // -webkit-transition: all 0.2s ease-out,
        // -moz-transition: all 0.2s ease-out,
        // -ms-transition: all 0.2s ease-out,
        // -o-transition: all 0.2s ease-out,
        '&hover': {
            opacity: 0.8,
        },
    anchor: {
        fontFamily: 'Open Sans, sans-serif',
        textDecoration: 'none',
    }
    },
    icons: {
        color: 'white',
        fontSize: '1.6em',
        margin: '20px 0'
    }    
})

const Header = () => {
    const classes = useStyles()
    const preventDefault = (event) => event.preventDefault();

        return (<div>
        <h1 className={classes.headingBackground}>CREATIVE</h1>
            <Fade bottom>
            <div className={classes.logo}>
                <Fade bottom cascade>
                    <img src={Logo} alt="logo" />
                </Fade>
            </div>
                <p className={classes.headerTitle}>
                {data.headerTagline[0]}
                <br></br>
                {data.headerTagline[1]}
                <br></br>
                {data.headerTagline[2]}
                <br></br>
                    <a className={classes.anchor} target="_blank" href={data.resumeURL} rel="noopener noreferrer" ><button className={classes.button}>View CV</button></a>
                <br></br>
                    <a target="_blank" href={data.gitHubURL} rel="noopener noreferrer" ><IconButton  ><GitHubIcon className={classes.icons} /></IconButton></a>
                    <a target="_blank" href={data.linkedInURL} rel="noopener noreferrer" ><IconButton ><LinkedInIcon className={classes.icons} /></IconButton></a>
                </p>
            </Fade>
        </div>);
    }

export default Header;