import React from 'react';
import Fade from 'react-reveal/Fade';
import data from '../yourdata';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Chip, Typography } from '@material-ui/core';
import TechStack from './TechStack';

const useStyles = makeStyles({
    about: {
        display: 'flex',
        flexDirection: 'row',
    },
    aboutContent: {
        width: '45%',
        margin: '0 auto',
    },
    aboutTitle: {
        color: 'white',
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '5em',
        textAlign: 'left',
        marginTop: -10,
    },
    aboutParagraph: {
        color: 'white',
        fontSize: '1.3em',
        textAlign: 'left',
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

        return (
            <div className={classes.about}>
                <div className={classes.aboutContent}>
                    <h1 className={classes.aboutTitle}><Fade bottom cascade>About.</Fade></h1>
                    <Fade bottom>
                        {data.aboutText.map((text, index) => {
                            return <p key={index} className={classes.aboutParagraph}>{text}</p>
                        })}
                    </Fade>
                    <Fade bottom >
                        <TechStack />
                    </Fade>
                </div>
                {data.ShowAboutImage ? <img src={data.aboutImage} className={classes.aboutImage} alt='jonathan'></img> : null}
             </div>  
        );
    }

 
export default About;