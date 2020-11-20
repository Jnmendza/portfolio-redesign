import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';
import Modal from 'react-modal';
import ProjectModal from './ProjectModal';

import { makeStyles } from '@material-ui/core/styles';
// import zIndex from '@material-ui/core/styles/zIndex';

const useStyles = makeStyles({
    project: {
        color: 'white',
    },
    image: {
        width: '30em',
        height: '30em',
    },
    portal: {
        zIndex: '100'
    }
})

const Project = ({ imageSrc, title, service, description, code, demo, website, details }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const classes = useStyles()
    return ( 
    <Fade bottom>
        <div className={classes.project}>
            <div onClick={() => setModalIsOpen(true)} >
                <img className={classes.image} src={imageSrc} alt={title}></img>
            </div>
            <h1>{title}</h1>
            <span>{service}</span>
            <Modal isOpen={modalIsOpen} ariaHideApp={false}>
                    <ProjectModal 
                        className={classes.portal}
                        imageSrc={imageSrc}
                        title={title} 
                        description={description}
                        code={code}
                        demo={demo}
                        website={website}
                        details={details}
                        setModalIsOpen={setModalIsOpen}
                    />
            </Modal>
        </div> 

    </Fade>);
}

export default Project;