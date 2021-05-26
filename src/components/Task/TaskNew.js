import React from 'react'
import { makeStyles } from '@material-ui/core'

import Button from '../Button'

const useStyles = makeStyles((theme) => ({
    textArea: {
        display: "block",
        resize: "none",
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(3),
        width: "100%",
        fontSize: "14px",
        fontFamily: "Ubuntu, Roboto, sans-serif",
        color: "rgb(159, 158, 167)",
        borderColor: "rgb(232, 232, 232)",
        borderStyle: "solid",
        borderRadius: "5px",
        backgroundColor: "rgb(249, 249, 250)"     
    },
    label: {
        color: "rgb(159, 158, 167)",
        fontFamily: "Roboto, Helvetica, sans-serif",
        lineHeight: "1.714", 
    },
    taskMain: {
        padding: theme.spacing(3)
    },
}))

function TaskNew (props) {
    const classes = useStyles()

    return (
        <>
            <div className={classes.taskMain}>               
                <label className={classes.label}>Название</label>
                <textarea 
                    id="name"
                    name="name"
                    value={props.name}
                    onChange={props.handleChange}
                    className={classes.textArea} 
                    rows="5"
                />
                <label className={classes.label}>Описание</label>
                <textarea 
                    id="description" 
                    name="description"
                    value={props.description}
                    onChange={props.handleChange}
                    className={classes.textArea} 
                    rows="7"
                />
            </div> 
            <Button onClick={props.handleCreateTask}>Сохранить</Button>
        </>
    )
}

export default TaskNew