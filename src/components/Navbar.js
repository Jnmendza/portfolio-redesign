import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    navbar: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'black',
        height: '4rem',
    },
    navbarLink: {
        textDecoration: 'none',
        color: 'white',
        padding:'2em',
        opacity: '0.5',
        transition: 'all 0.3s ease-in-out',
        cursor: 'pointer',
        // backgroundColor: 'red',
        // -webkit-transition: 'all 0.3s ease-in-out',
        // -moz-transition: 'all 0.3s ease-in-out',
        // -ms-transition: 'all 0.3s ease-in-out',
        // -o-transition: 'all 0.3s ease-in-out',
        '&:hover': {
            opacity: 1,
        },
        active: {
            color:'black',
            opacity: 1,
        }
    }
})

const  Navbar = () => {
    const classes = useStyles()
    
    const scrollToTop = () => {
        scroll.scrollToTop();
    };

        return (
            <div className={classes.navbar}>
            
                <Link className={classes.navbarLink}
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={scrollToTop}>Home</Link>

                <Link
                className={classes.navbarLink}
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={scrollToTop}>About</Link>

                <Link
                className={classes.navbarLink}
                activeClass="active"
                to="work"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={scrollToTop}>Work</Link>

                <Link
                className={classes.navbarLink}
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={scrollToTop}>Contact</Link>

            </div>
        );
    }

 
export default Navbar;