import React from 'react';
import Fade from 'react-reveal/Fade';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    project: {
        color: 'white',
        display: 'flex',
        margin: '0 0 1em 0'
    },
    image: {
        width: '20em',
        height: '20em',
        margin: '0 2em 0 0',
    },
    info: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'left',
        width: '60%'
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
    }
})

const Project = ({ project }) => {
    const { imageSrc, title, service, description, links, details, url } = project
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
                 <div className={classes.linkContainer}>
                   <Link target="_blank" className={classes.link} href={links.code} component="a">How it works</Link>
                   <Link target="_blank" className={classes.link} href={links.demo} component="a">Check it out</Link>
                </div>
            </div>
        </div>
    </Fade>);
}

export default Project;

                                // description = {project.description}
                                // links={project.links}
                                // service = {project.service}
                                // details = {project.details}
                                // url={project.url}
                                // code={project.code}
                                // demo={project.demo}
                                // website={project.website}