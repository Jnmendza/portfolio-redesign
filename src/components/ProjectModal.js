import React from 'react'
import { Box, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    // backgroundColor: 'pink',
    display: 'flex',
    marginTop: '8em',
    marginLeft: '8em',
    width: '80%',
    height: '80%',
    zIndex: 1000

  },
  containerLinks: {
    margin: '20px 0'
  },
  link: {
    textDecoration: 'none',
    margin: '20px',
  }, 
  image: {
    margin: 20,
  },
  info: {
    margin: 'auto 0',
  }
})

const ProjectModal = ({ title, description, links, setModalIsOpen, details, imageSrc }) => {
  const classes = useStyles()

  return (
      <Box container className={classes.container}>
        <Box container className={classes.image}>
          <img className={classes.image} src={imageSrc} alt={title}></img>
        </Box>
        <Box container className={classes.info}>
          <h1>{title}</h1>
          <p>{description}</p>  
          <ul>
            {details.map(detail => <li>{detail}</li>)}
          </ul>
          <Box container className={classes.containerLinks}>
            <a className={classes.link} target="_blank" href={links.code} rel="noopener noreferrer" >Code </a> 
            <a className={classes.link} target="_blank" href={links.demo} rel="noopener noreferrer" >Demo </a>
            <a className={classes.link} target="_blank" href={links.website} rel="noopener noreferrer" >Website </a>
          </Box>
          <Button variant='contained' color='primary' onClick={() => setModalIsOpen(false)}>Close</Button>
        </Box>
      </Box>
  )
};

export default ProjectModal;