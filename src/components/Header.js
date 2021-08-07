import React from 'react';
import Fade from 'react-reveal/Fade';
import Typical from 'react-typical';
import Navbar from './Navbar'

import data from '../yourdata'
import Logo from '../jm.svg';

import { makeStyles } from '@material-ui/core/styles';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import { IconButton, Link } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    wrapper: {
        marginTop: '50px',
    },
    headingBackground: {
        position: 'fixed',
        opacity: 0.05,
        fontSize: '25em',
        left:'-0.2em',
        top:'-0.5em',
        zIndex: -100,
        color:'gray',     
    },
    container: {
        width: '90%',
        margin: '0px auto',
        [theme.breakpoints.down('sm')]: {
        width: '60%',
        }
    },
    logo: {
        width: '12%',
        height: '12%',
    },
    headerTitle: {
        // position: 'relative',
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '3em',
        textAlign: 'left',
        lineHeight: '50px'
        // top:'2em',        
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
        opacity: '0.5',
        fontSize: '1.6em',
        margin: '20px 0',
        '&:hover' : {
            opacity: 1,
        }
    }    
}))

const Header = () => {
    const classes = useStyles()
        return (
            <div className={classes.wrapper}>
                <h1 className={classes.headingBackground}>CREATIVE</h1>
                <div className={classes.container}>
                    <Fade bottom>
                        <div className={classes.logo}>
                            <Fade bottom cascade>
                                <img src={Logo} alt="logo" />
                                <Navbar />
                            </Fade>
                        </div>
                        <div className={classes.headerTitle}>
                            <p>{data.headerTagline[0]}</p>
                            {/* 
                                {data.headerTagline[1]}
                            */}
                            <Typical 
                                loop={Infinity}
                                wrapper="span"
                                steps={[
                                    'Graphic Designer',
                                    2000,
                                    'Web Developer',
                                    2000,
                                    'Digital Designer',
                                    2000
                                ]}
                                />
                                <p>{data.headerTagline[2]}</p>
                            </div>
                            <div style={{ float:'left' }}>
                            <br></br>
                            <Link component="a" href={data.resumeURL} rel="noopener noreferrer" target="_blank" underline='none' ><button className={classes.button}>View CV</button></Link>
                            <br></br>
                            <a target="_blank" href={data.gitHubURL} rel="noopener noreferrer" ><IconButton  ><GitHubIcon className={classes.icons} /></IconButton></a>
                            <a target="_blank" href={data.linkedInURL} rel="noopener noreferrer" ><IconButton ><LinkedInIcon className={classes.icons} /></IconButton></a>
                        </div>
                    </Fade>
                </div>
            </div>
        );
    }

export default Header;