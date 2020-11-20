import React from 'react'
import { Box, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    margin: '20px'
  },
  link: {
    textDecoration: 'none',
    margin: '20px',
  }
})

const ProjectModal = ({ title, description, code, demo, website, setModalIsOpen, details, imageSrc }) => {
  const classes = useStyles()

  return (
      <Box container className={classes.container}>
        <img className={classes.image} src={imageSrc} alt={title}></img>
        <h1>{title}</h1>
        <p>{description}</p>  
        <ul>
          <li>{details[0]}</li>
          <li>{details[1]}</li>
          <li>{details[2]}</li>
        </ul>
        <Box container className={classes.container}>
          <a className={classes.link} target="_blank" href={code} rel="noopener noreferrer" >Code </a> 
          <a className={classes.link} target="_blank" href={demo} rel="noopener noreferrer" >Demo </a>
          <a className={classes.link} target="_blank" href={website} rel="noopener noreferrer" >Website </a>
        </Box>
        <Button variant='contained' color='primary' onClick={() => setModalIsOpen(false)}>Close</Button>

      </Box>
  )
};

export default ProjectModal;