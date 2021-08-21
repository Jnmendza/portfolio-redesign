import React from 'react';
import Fade from 'react-reveal/Fade';
import data from '../yourdata';
import { makeStyles } from '@material-ui/core/styles';
import TechStack from './TechStack';

const useStyles = makeStyles((theme) => ({
    about: {
        display: 'flex',
        flexDirection: 'row',
        margin: 'auto',
        width: '80%',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            width:'100%',
        }
    },
    aboutContent: {
        width: '45%',
        margin: '0 auto',
        [theme.breakpoints.down('sm')]: {
            width: '80%'
        }
    },
    aboutTitle: {
        color: 'white',
        fontFamily: 'Montserrat, sans-serif',
        // fontSize: '5em',
        fontSize: 'clamp(3.5rem, 8vw, 2rem);',
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
        objectFit: 'cover',
        width: 'auto',
        height: 'auto',
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    }
}))

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