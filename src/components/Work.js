import React from 'react';
import Project from './Project';
import Fade from 'react-reveal/Fade';
import data from '../yourdata';
// import { Grid } from '@material-ui/core';
import TechStack from './TechStack';


import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
        container: {
                margin: 'auto',
                width: '80%'
        },
        heading: {
                color: 'white',
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '5em',
                textAlign: 'left',
        },
        workContent: {
                display: 'flex',
                flexDirection: 'column'
        }
})

const Work = () => {
        const classes = useStyles()
        return (
        // <div className={classes.container}>
        //         <h1 className={classes.heading}>
        //         <Fade bottom cascade>Work.</Fade></h1>
        //         <Grid container spacing={3}>
        //         {data.projects.map((project)=>(
        //                 <Grid item xs={12} sm={6} >
        //                         <Project key={project.id}
        //                         project={project}
        //                         ></Project>
        //                 </Grid>
        //                 ))}
        //                 </Grid>
        // </div>  
                <div className={classes.container}>
                        
                        <h1 className={classes.heading}>
                        <Fade bottom cascade>Work.</Fade></h1>
                        <div className={classes.workContent}>
                                {data.projects.map((project)=>(
                                <Project key={project.id}
                                        project={project}
                                ></Project>
                                ))}
                        </div>
                </div>
        );
    }

export default Work;