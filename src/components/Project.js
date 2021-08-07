import React from 'react';
import Fade from 'react-reveal/Fade';
import { Link, 
    Chip,
    // Button, 
    // Card, 
    // CardActionArea, 
    // CardActions, 
    // CardMedia, 
    // CardContent, 
    // Typography,
    // Grid,
    // Container
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    project: {
        color: 'white',
        display: 'flex',
        margin: '0 0 1em 0',
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            flexDirection: 'column',
            borderTop: '1px solid white',
            paddingTop: '50px'
    }
    },
    image: {
        width: '20em',
        height: '20em',
        margin: '0 2em 0 0',
        objectFit: 'cover'
    },
    info: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        textAlign: 'left',
        width: '60%',
        [theme.breakpoints.down('sm')]: {
            margin: 'auto'
    }
    },
    link: {
        margin: '1em 0.5em 0 0',
        border: '1px solid white',
        textDecoration: 'none',
        color: 'white',
        opacity: '0.5',
        cursor: 'pointer',
        padding: '0.5em',
        '&:hover': {
            textDecoration: 'none',
            opacity: 1,
        }
    },
    linkContainer: {
        margin: '2em 0'
    },
    // root: {
    //     flexGrow: 1,
    //     width: '90%',
    //     height: 480,
    //     padding: 5,
    //     backgroundColor: '#F5F5F5'
    //   },
    //   media: {
    //     height: 280,
    //   },
}));

const Project = ({ project }) => {
    const { imageSrc, title, service, description, links, details } = project
    const classes = useStyles()
    
    return ( 
    <Fade bottom >
        <div className={classes.project}>
            <div>
                <img className={classes.image} src={imageSrc} alt={title}></img>
            </div>
            <div className={classes.info}>
                <h1>{title}</h1>
                <span>{service}</span>
                <p>{description}</p>

                <div>
                    {details.map((detail, index) => {
                        return (
                            <Chip key={index} variant="outlined" size='small' label={detail} style={{ color: 'white', border: '0.5px solid white', margin: '5px 10px' }} />
                        )
                    })}
                </div>

                 <div className={classes.linkContainer}>
                   <Link target="_blank" className={classes.link} href={links.code} component="a">How it works</Link>
                   <Link target="_blank" className={classes.link} href={links.demo} component="a">Check it out</Link>
                   {links.vue ? <Link target="_blank" className={classes.link} href={links.demo} component="a">Vue JS</Link> : null}
                </div>

            </div>
        </div>

    </Fade>);
}

export default Project;