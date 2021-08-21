import React from 'react';
import data from '../yourdata';
import { Chip, Grid, Typography, Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    container: {
        backgroundColor: 'transparent',
        color: 'grey',
        borderBottom: '1px solid grey'
    },
    root: {
        width: '100%'
    }
})

const TechStack = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Accordion square className={classes.container}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{ color: 'grey' }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                color='primary'
                >
                <Typography>Tech Skills</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Grid container xs={12} spacing={1}>
                    {data.techStack.map((stack, index) => {
                                    return(
                                        <Grid key={index} item xs={4} md={2} >
                                            <Chip  label={stack} variant="outlined" style={{ color: 'grey',  }}></Chip>
                                        </Grid>
                                    )
                                })}
                </Grid>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default TechStack


// <Grid container spacing={1}>
//             {data.techStack.map((stack, index) => {
//                 return(
//                     <Grid item xs={8} sm={3}>
//                         <Typography style={{ color: 'white' }} key={index} variant='subtitle1'>{stack}</Typography>
//                     </Grid>
//                 )
//             })}
//             </Grid>