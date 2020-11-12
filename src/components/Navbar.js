import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    navbar: {
        position:'fixed',
        left:'60em',
        top:'6em',
        zIndex: '10',
    },
    navbarList: {
        display: 'inline-block',
        cursor: 'pointer',
        fontSize: '1em',
    },
    navbarLink: {
        textDecoration: 'none',
        color: 'white',
        padding:'1em',
        opacity: '0.5',
        transition: 'all 0.3s ease-in-out',
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
        <nav className={classes.navbar}>
            <ul>
                <li className={classes.navbarList}><Link
                    className={classes.navbarLink}
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={scrollToTop}
                >Home</Link></li>
                <li className={classes.navbarList}><Link
                    className={classes.navbarLink}
                    activeClass={classes.active}
                    to="About"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >About</Link></li>
                <li className={classes.navbarList}><Link
                    className={classes.navbarLink}
                    activeClass={classes.active}
                    to="work"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >Work</Link></li>
                <li className={classes.navbarList}><Link
                    className={classes.navbarLink}
                    activeClass={classes.active}
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >Contact</Link></li>
            </ul>
        </nav> );
    }
 
export default Navbar;