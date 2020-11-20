import React from 'react';
import Project from './Project';
import Fade from 'react-reveal/Fade';
import data from '../yourdata';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
        heading: {
                color: 'white',
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '5em',
                textAlign: 'left',
        },
        workContent: {
                display: 'grid',
                gridTemplateColumns: 'repeat(2,1fr)',
                gridGap: '2em',
        }
})

const Work = () => {
        const classes = useStyles()
        return (
        <div>
                <h1 className={classes.heading}>
                <Fade bottom cascade>Work.</Fade></h1>
                <div className={classes.workContent}>
                        {data.projects.map((project)=>(
                        <Project key={project.id}
                                title = {project.title}
                                description = {project.description}
                                links={project.links}
                                service = {project.service}
                                imageSrc = {project.imageSrc}
                                details = {project.details}
                                url={project.url}
                                code={project.code}
                                demo={project.demo}
                                website={project.website}
                        ></Project>
                        ))}
                </div>
        </div>  );
    }

export default Work;