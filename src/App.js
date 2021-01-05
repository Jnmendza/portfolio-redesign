import React from 'react';
import './App.css';

import Header from './components/Header';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import Navbar from './components/Navbar'

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  App: {
    textAlign: 'center',
  },
  appHeader: {
    // position: 'relative',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: 'white',
    top:'4em',
  },
  about: {
    display: 'flex',
    flexDirection: 'row',
  },
  work: {
    // position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    // left:'10em',
    // top:'8em',
    alignItems: 'center',
  },
  contact: {
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    // position: 'relative',
    // top:'20em',
    // left:'15em',
    textAlign: 'left',
  }
})

function App() {
  const classes = useStyles()
  return (

    <div className={classes.App}>
        <Navbar />
        <div className={classes.appHeader} id="home">
        <Header></Header>
        </div>
        
        <div className={classes.about} id="about">
          <About></About>
        </div>
        <div className={classes.work} id="work" >
          <Work></Work>
        </div>
        <div className={classes.contact} id="contact">
          <Contact></Contact>
        </div>
      </div>
  );
}

export default App;