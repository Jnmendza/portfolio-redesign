import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typical from 'react-typical';

import Fade from 'react-reveal/Fade';
import data from '../yourdata';
import Logo from '../jm.svg';

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import {IconButton} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    container: {
        margin: 'auto',
        width: '80%',
    },
    amazingColor: {
        color:'blue',
        opacity: 1,
    },
    title: {
        fontFamily: 'Montserrat, sans-serif',
        fontSize: 'clamp(3.5rem, 8vw, 2rem);',
        textAlign: 'left',       
    },
    contactContent: {

    },
    infoWrapper: {
        display: 'flex',
        justifyContent: 'space-between',
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            flexDirection: 'column',
        }
    },
    contactInfo: {
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            alignItems: 'center',
            margin: '25px auto 0 auto'
        }
    },
    iconWrapper: {
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            flexDirection: 'column',
            margin: '0 20px'
        }
    },
    form: {
        width: '70%',
        [theme.breakpoints.down('sm')]: {
            width: '100%'
        }
    },
    input: {
        width: '100%',
        padding: '12px 20px',
        margin: '8px 0',
        display: 'inline-block',
        border: '1px solid #ccc',
        borderRadius: '4px',
        boxSizing: 'border-box',
    },
    textArea: {
        height: '120px',
        width: '100%',
        padding: '12px 20px',
        margin: '8px 0',
        display: 'inline-block',
        border: '1px solid #ccc',
        borderRadius: '4px',
        boxSizing: 'border-box',
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
        }
    },
    email: {
        textDecoration: 'none',
        color: 'white',
    },
    icons: {
        color: 'white',
        opacity: '0.5',
        fontSize: '1.6em',
        '&:hover': {
            opacity: 1
        }
    },
    footer: {
        marginTop: '15px',
        borderTop: '1px solid white'
    },
    footerCopyright: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
}))


const Contact = () => {
    const classes = useStyles();
    const today = new Date();
    const dayOfWeek = today.getDay();
    const year = today.getFullYear();

        return (  
            <div className={classes.container}>
                <h1 className={classes.title}>
                    <Fade bottom cascade>Contact.</Fade>
                </h1>
                <Fade bottom>
                    <div className='contact-content'>
                        <h1 className={classes.title}>
                            Let’s create your next<br></br>
                            <span className={classes.amazingColor}>experience together</span>
                        </h1>
                        <div className={classes.infoWrapper}>
                            <form className={classes.form} name="contact" method="POST" data-netlify="true" >
                                <input type="hidden" name="form-name" value="contact" />
                                <p><label>Your Name: <input required className={classes.input} type="text" name="name" /></label>   </p>
                                <p><label>Your Email: <input required className={classes.input} type="email" name="email" /></label></p>
                                <p><label>Message: <textarea className={classes.textArea} name="message"></textarea></label></p>
                                <p><button className={classes.button} type="submit">Send</button></p>
                            </form>
                            <div className={classes.contactInfo}>
                                <div className={classes.iconWrapper}>
                                    <a target="_blank" href={data.gitHubURL} rel="noopener noreferrer" ><IconButton><GitHubIcon className={classes.icons} /></IconButton></a>
                                    <a target="_blank" href={data.linkedInURL} rel="noopener noreferrer" ><IconButton><LinkedInIcon className={classes.icons} /></IconButton></a>
                                </div>
                                <div className={classes.contactWrapper}>
                                    <h3>Email</h3>
                                    <a href={`mailto:${data.contactEmail}`} className={classes.email}>{data.contactEmail}</a>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </Fade>
                <Fade bottom cascade>
                    <div className={classes.footer}>
                        <div className={classes.footerCopyright}>
                            <img src={Logo} alt="logo" height='30px' style={{ margin: '50px 20px' }}/>
                            <p>{`Copyright © Jonathan Mendoza ${year}`}</p>
                        </div>
                    </div>
                </Fade>
            </div>
        );
    }

export default Contact;