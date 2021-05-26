import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import Navigation from './components/Navigation'
import Header from './components/Header'
import Main from './components/Main'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        fontFamily: 'Roboto',
        backgroundColor: '#fff',
        height: '100vh',
    },
}));

export default function App() {
    const classes = useStyles()

    const [openPage, setOpenPage] = useState('tasks')

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Navigation openPage={openPage} setOpenPage={setOpenPage}/>
            <Header />
            <Main openPage={openPage}/>
        </div>
    )
}
