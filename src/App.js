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
    position: 'relative',
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
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    left:'15em',
    top:'8em',
    alignItems: 'flex-start',
  },
  contact: {
    color: 'white',
    position: 'relative',
    top:'20em',
    left:'15em',
    textAlign: 'left',
  }
})

function App() {
  const classes = useStyles()
  return (
    <div className={classes.App}>
      <Navbar></Navbar>
      <div className={classes.appHeader}>
      <Header></Header>
      </div>
      
      <div className={classes.about}>
        <About></About>
      </div>
      <div className={classes.work}>
        <Work></Work>
      </div>
      <div className={classes.contact}>
        <Contact></Contact>
      </div>
    </div>
  );
}

export default App;