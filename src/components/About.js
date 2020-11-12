import React from 'react';
import Fade from 'react-reveal/Fade';
import data from '../yourdata';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    about: {
        display: 'flex',
        flexDirection: 'row',
    },
    aboutContent: {
        width: '50%',
        position: 'relative',
        left:'15em',
    },
    aboutTitle: {
        color: 'white',
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '5em',
        textAlign: 'left',
    },
    aboutParagraph: {
        color: 'white',
        fontSize: '1.3em',
        textAlign: 'left',
        width: '25em',
    },
    aboutImage: {
        marginLeft: '5em',
        transform: 'scaleX(-1)',
        width: '40%',
        height: 'auto',
    }
})

function About() {
        const classes = useStyles()

        return (<div className={classes.about}>
            <div className={classes.aboutContent}>
            <h1 className={classes.aboutTitle}><Fade bottom cascade>About.</Fade></h1>
            <Fade bottom>
                    <p className={classes.aboutParagraph}>
                        I’m a full-stack web developer and with an 8-year background in graphic design. 
                        My most recent experience has been in startup environments, loaded with tight 
                        deadlines and multiple responsibilities.
                    </p>
                    <p className={classes.aboutParagraph}>
                        My creativity has led me to this career because I’ve always wanted to have an 
                        understanding of every step of the creative process from beginning to end. 
                        As a developer I’m always looking to learn and implement new methods or new 
                        approaches to any problem. I'm skilled in JavaScript, React JS, Node JS and Redux.
                    </p>
            </Fade>
            </div>
            {data.ShowAboutImage ? <img src={data.aboutImage} className={classes.aboutImage} alt='about iamge'></img> : null}
            

        </div>  );
    }

 
export default About;