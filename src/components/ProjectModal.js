import React from 'react'

const ProjectModal = ({ title, description, code, demo, website, setModalIsOpen }) => {
  return (
      <div>
        <h1>{title}</h1>
        <p>{description}</p>  
        <ul>
          <li>{code}</li>
          <li>{demo}</li>
          <li>{website}</li>
        </ul>
        <button onClick={() => setModalIsOpen(false)}>Close</button>

      </div>
  )
};

export default ProjectModal;