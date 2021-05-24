

import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import { drawerWidth } from '../utils'
import TasksTable from './TasksTable'

const useStyles = makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: "#fff",
        padding: 0,
    },
    button: {
        backgroundColor: "rgb(0, 140, 240)",
        height: "40px",
        width: "180px",
        borderRadius: "40px",
        border: "none",
        fontSize: "16px",
        color: "rgb(255, 255, 255)",
        lineHeight: "1.2",
        textAlign: "center",
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(5),
        marginLeft: "20%"
    }
}));

function Main (props) {
    const classes = useStyles();
    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <button className={classes.button}>Создать заявку</button>
            <TasksTable />
        </main>  
    )
}

export default Main