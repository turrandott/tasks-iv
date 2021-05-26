import React, { useState, useEffect } from 'react'
import { makeStyles, Chip, Select, MenuItem } from '@material-ui/core'

import { createTask, getTask, updateTask } from '../../api'
import calendar from '../../assets/calendar.png'
import TaskToolbar from './TaskToolbar'
import TaskNew from './TaskNew'
import TaskEditMain from './TaskEditMain'

const useStyles = makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    content: {
        position: "fixed",
        right: "0px",
        width: "50vw",
        zIndex: "50",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        overflowY: "scroll",
    },
    taskRoot: {
        backgroundColor: "rgb(236, 243, 247)",
        boxShadow: "0px 0px 3px 0px rgba(0, 0, 0, 0.25)",
        flexGrow: 1,
        display: "flex",
        flexDirection: "column"
    },
    label: {
        color: "rgb(159, 158, 167)",
        fontFamily: "Roboto, Helvetica, sans-serif",
        lineHeight: "1.714",
    },
    flexContainer: {
        display: "flex",
        flexGrow: 1
    },
    left: {
        width: "70%",
    },
    right: {
        width: "30%",
        borderLeft: "1px solid rgb(215, 220, 224)",
        padding: theme.spacing(2),
        fontSize: "14px",
        fontFamily: "Roboto, sans-serif",
        color: "rgb(3, 3, 3)",
        lineHeight: "1.714;",
        textAlign: "left",   
    },
    dot: {
        borderRadius: "50%",
        width: "11px",
        height: "11px",
        marginRight: theme.spacing(1)       
    },
    status: {
        display: "flex",
        alignItems: "baseline",
        fontSize: "14px",
        fontFamily: "Roboto, sans-serif",
        color: "rgb(82, 84, 96)",
        lineHeight: "1.2", 
    },
    infoGroup: {
       marginTop: theme.spacing(3) 
    },
    info: {
        marginTop: theme.spacing(0),
    },
    tag: {
        borderWidth: "1px",
        borderColor: "rgb(157, 161, 170)",
        borderStyle: "solid",
        backgroundColor: "rgb(255, 255, 255)",
        height: "18px",
        fontSize: "12px",
        color: "rgb(157, 161, 170)",
        lineHeight: "1.2", 
        marginRight: theme.spacing(1)      
    },
    calendar: {
        height: "27px"
    },
    calendarGroup: {
        display: "flex",
        alignItems: "center"
    },
    select: {
        "&:before": {
            border: "none"
        },
        fontSize: "14px",
        fontFamily: "Roboto, sans-serif",
        color: "rgb(82, 84, 96)",
        lineHeight: "1.2", 
    },
    commentaryArea: {
        marginTop: theme.spacing(8)
    },
    commentaries: {
        padding: theme.spacing(3)
    }
}))

function Task (props) {
    const classes = useStyles()

    const [state, setState] = useState({
        name: '',
        description: '',
    })

    const [comment, setComment] = useState('')

    const getData = async (taskId) => {
        setComment('')
        if (taskId !== "new") {
            const response = await getTask(taskId)
            if (response.status === 200) {
                setState({
                    ...response.data,
                })         
            }    
        } else {
            setState({
                name: '',
                description: ''
            })
        }
    }

    useEffect(() => {
        getData(props.openTaskId)
    }, [props.openTaskId])

    const handleChange = event => {
        if (event.target.name === "comment") {
            setComment(event.target.value)
        } else {
            setState({...state, [event.target.name]: event.target.value})
        }
    }

    const handleCreateTask = async event => {
        const response = await createTask(state)
        if (response.status === 200) {
            props.setOpenTaskId(response.data)
        }
    }

    const handleUpdateTask = async event => {
        let updateBody = { 
            ...state
        }
        if (comment.trim() !== '') {
            updateBody = {
                ...state,
                comment: comment.trim()
            }
        }
        const response = await updateTask(updateBody)
        if (response.status === 200) {
            console.log('Заявка обновлена')
        }
        getData(props.taskId)
    }

    const formatDate = str => {
        const date = new Date(str);
        return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()} г.`
    }

    const handleSelectStatus = event => {
        const statusId = event.target.value
        const statusData = props.info.statuses.find((item) => item.id === statusId)
        setState(prevState => {
            return {
                ...prevState,
                statusId,
                statusName: statusData.name,
                statusRgb: statusData.rgb
            }  
        })
    }

    const handleSelectExecutor = event => {
        const executorId = event.target.value
        const executorData = props.info.users.find((item) => item.id === executorId)
        setState(prevState => {
            return {
                ...prevState,
                executorId,
                executorName: executorData.name,
            }  
        })
    }
    
    return (
        <div className={classes.content}>
            <div className={classes.toolbar} />
            <div className={classes.taskRoot}>
                <TaskToolbar 
                    openTaskId={props.openTaskId}
                    name={state.name}
                    setClose={props.setClose}
                />
                <div className={classes.flexContainer}>
                    <div className={classes.left}>
                        {props.openTaskId === "new" 
                            ? <TaskNew
                                name={state.name}
                                handleChange={handleChange}
                                description={state.description}
                                handleCreateTask={handleCreateTask}
                            />
                            : <TaskEditMain 
                                description={state.description}
                                comment={comment}
                                handleChange={handleChange}
                                lifetimeItems={state.lifetimeItems}
                                handleUpdateTask={handleUpdateTask}
                            />
                        }
                    </div>
                    <div className={classes.right}>
                        {props.openTaskId !== "new" && state.statusId && <>
                            <div className={classes.status}>
                                <div className={classes.dot} style={{backgroundColor: state.statusRgb}}>
                                </div>

                                <Select
                                    id="status-select"
                                    value={state.statusId}
                                    onChange={handleSelectStatus}
                                    className={classes.select}
                                    >
                                        {props.info.statuses.map((item) => 
                                            <MenuItem value={item.id} key={item.id}>
                                                {item.name}
                                            </MenuItem>
                                        )}
                                </Select>
                            </div>

                            <div className={classes.infoGroup}>
                                <label className={classes.label}>Создана</label>
                                <p className={classes.info}>{state.initiatorName}</p>
                            </div>

                            <div className={classes.infoGroup}>
                                <label className={classes.label}>Исполнитель</label>
                                <Select
                                    id="executor-select"
                                    value={state.executorId}
                                    onChange={handleSelectExecutor}
                                    className={classes.select}
                                    style={{color: "rgb(3, 3, 3)"}}
                                    >
                                        {props.info.users.map((item) => 
                                            <MenuItem value={item.id} key={item.id}>
                                                {item.name}
                                            </MenuItem>
                                        )}
                                </Select>
                            </div>

                            <div className={classes.infoGroup}>
                                <label className={classes.label}>Приоритет</label>
                                <p className={classes.info}>{state.priorityName}</p>
                            </div>

                            <div className={classes.infoGroup}>
                                <label className={classes.label}>Срок</label>
                                <div className={classes.calendarGroup}>
                                    <img src={calendar} className={classes.calendar} alt="calendar"/>
                                    {formatDate(state.resolutionDatePlan)}
                                </div>
                            </div>

                            <div className={classes.infoGroup}>
                                <label className={classes.label}>Теги</label>
                                <div>
                                    {state.tags && state.tags.map((item) => 
                                        <Chip 
                                            variant="outlined"
                                            key={item.id} 
                                            label={item.name}
                                            className={classes.tag}
                                        />
                                    )}
                                </div>
                            </div>                 
                        </>}
                    </div>
                </div>
            </div>
        </div>  
    )
}

export default Task