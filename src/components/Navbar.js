import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    navbar: {
        // position: 'absolute',
        // top: '80px',
        // right: '150px',
        // display: 'flex',
        // justifyContent: 'center',
        // background: 'black',
        // zIndex: '99',
    },
    navbarLink: {
        textDecoration: 'none',
        color: 'white',
        padding:'1em',
        opacity: '0.5',
        transition: 'all 0.3s ease-in-out',
        cursor: 'pointer',
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