import React from 'react'
import { makeStyles, SvgIcon, Toolbar, 
    IconButton } from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
    taskHeader: {
        backgroundColor: "rgb(26, 72, 118)",
        fontSize: "16px",
        fontFamily: "Roboto, sans-serif",
        lineHeight: "1.2",
        textAlign: "left",
        boxShadow: "0px 0px 3px 0px rgba(0, 0, 0, 0.25)",
        color: "rgb(255, 255, 255)"  
    },
    id: {
        margin: theme.spacing(2),
        whiteSpace: "nowrap",
        fontSize: "18px",
        fontFamily: "Myriad Pro, sans-serif",
        color: "rgb(255, 255, 255)",
        lineHeight: "1.111", 
    },
    name: {
        fontSize: "16px",
        margin: theme.spacing(2),
        fontFamily: "Roboto, sans-serif",
        color: "rgb(255, 255, 255)",
        lineHeight: "1.2",
        flexGrow: 1,
    },
    taskTitle: {
       flexGrow: 1, 
       fontFamily: "Roboto, Helvetica, sans-serif",
       display: "flex",
       alignItems: "center"
    },
}))

function TaskToolbar (props) {
    const classes = useStyles()

    return (
        <Toolbar className={classes.taskHeader}>
            <span className={classes.taskTitle}>
                <h3 className={classes.id}>
                    {props.openTaskId === "new" ? "Новая заявка" : `№ ${props.openTaskId}`}
                </h3>
                {props.openTaskId !== "new" && <h4 variant="h6" className={classes.name}>{props.name}</h4>}
            </span>
            <IconButton color="inherit" onClick={props.setClose}>
                <SvgIcon>
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                </SvgIcon>
            </IconButton>
        </Toolbar>
    )
}

export default TaskToolbar