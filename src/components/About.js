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
        width: '45%',
        margin: '0 0 0 4em',
        // position: 'relative',
        // left:'15em',
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
                {data.aboutText.map(text => {
                    return <p className={classes.aboutParagraph}>{text}</p>
                })}
            </Fade>
            </div>
            {data.ShowAboutImage ? <img src={data.aboutImage} className={classes.aboutImage} alt='jonathan'></img> : null}
        </div>  );
    }

 
export default About;