import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles'

import TasksTable from './TasksTable'
import Task from './Task/Task'
import Button from './Button'
import { getStatuses, getPriorities, getUsers } from '../api'

const useStyles = makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: "#fff",
        padding: 0,
        height: "fit-content",
        minHeight: "100%",
        position: "relative"
    },
    button: {
        marginLeft: "20%",
    },
    mainPage: {
        position: "absolute",
        width: "100%"
    },
    title: {
        margin: theme.spacing(3),
        fontFamily: "Roboto, sans-serif"
    }
}))

function Main (props) {
    const classes = useStyles()

    const [open, setOpen] = useState(false)
    const [openTaskId, setOpenTaskId] = useState(null)
    const [info, setInfo] = useState({
        statuses: [],
        priorities: [],
        users: []
    })

    useEffect(() => {
        const getData = async () => {
            const statuses = await getStatuses()
            const priorities = await getPriorities()
            const users = await getUsers()
            setInfo({
                statuses,
                priorities,
                users
            })
        }
        
        getData()
    }, [])

    const newTask = event => {
        setOpen(true)
        setOpenTaskId('new')
    }

    const openTask = taskId => {
        setOpen(true)
        setOpenTaskId(taskId)
    }

    const setClose = () => {
        setOpen(false)
        setOpenTaskId(null)
    }

    if (props.openPage === 'tasks') {
        return (
            <main className={classes.content}>
                <div className={classes.mainPage}>
                    <div className={classes.toolbar}/>
                    <div className={classes.button}>
                        <Button onClick={newTask}>Создать заявку</Button>
                    </div>
                    <TasksTable openTask={openTask} priorities={info.priorities}/>
                </div>
                {open && <Task 
                    openTaskId={openTaskId} 
                    setClose={setClose} 
                    setOpenTaskId={setOpenTaskId}
                    info={info}
                />}
            </main>
        )
    } else {
        return (
            <main className={classes.content}>
                <div className={classes.mainPage}>
                    <div className={classes.toolbar}/>
                    <h1 className={classes.title}>{props.openPage}</h1>
                </div>
            </main>
        )
    }
}

export default Main