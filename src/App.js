import React from 'react';
import './App.css';

import Header from './components/Header';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';

import { makeStyles } from '@material-ui/core/styles';
import Logo from './jm.svg';
import Navbar from './components/Navbar'

const useStyles = makeStyles({
  App: {
    textAlign: 'center',
  },
  navbar: {
    display: 'flex',
    alignItems: 'center',
    padding: '15px 0',
    justifyContent: 'space-evenly',
    backgroundColor: 'black'
  },
  logo: {
    width: '70px',
    height: '70px'
  },
  appHeader: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: 'white',
    top:'4em',
    marginBottom: '75px'
  },
  about: {
    display: 'flex',
    flexDirection: 'row',
  },
  work: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  contact: {
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
  }
})

function App() {
  const classes = useStyles()
  return (
    <>
    <div className={classes.navbar}>
        <img className={classes.logo} src={Logo} alt="logo" />
        <Navbar />
    </div>
    <div className={classes.App}>
        <div className={classes.appHeader} id="home">
        <Header/>
        </div>
        <div className={classes.about} id="about">
          <About/>
        </div>
        <div className={classes.work} id="work" >
          <Work/>
        </div>
        <div className={classes.contact} id="contact">
          <Contact/>
        </div>
      </div>
      </>
  );
}

export default App;