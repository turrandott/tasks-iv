// import './App.css'
import Navigation from './components/Navigation'
import Header from './components/Header'
import Main from './components/Main'

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        fontFamily: 'Roboto',
        backgroundColor: '#fff',
        height: '100vh'
    },
}));

export default function App() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Navigation />
            <Header />
            <Main />
        </div>
    )
}
