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
        objectFit: 'cover'
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
})

const Project = ({ project }) => {
    const { imageSrc, title, service, description, links, details } = project
    const classes = useStyles()
    
    return ( 
    <Fade bottom >
    {/* 
        <Card className={classes.root}>
            <CardActionArea >
                <CardMedia
                    className={classes.media}
                    image={imageSrc}
                    title="Project photo"
                />
                <CardContent>
                    <Typography variant="h5" component="h2" align='left'>{title}</Typography>
                    <Typography gutterBottom variant="caption" component="h3" align='left'>{service}</Typography>
                    <Typography variant="body2" color="textSecondary" component="p" align="left">
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions disableSpacing={false}>
                    <Button variant="outlined" size="small" href={links.code} target="_blank">
                    How it works
                    </Button>
                    <Button variant="outlined" size="small" href={links.demo} target="_blank">
                    Check it out
                    </Button>
            </CardActions>
        </Card>
        */}

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
                </div>
            </div>
        </div>

    </Fade>);
}

export default Project;