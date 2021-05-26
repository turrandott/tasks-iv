import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

import { getTasks } from '../api'

const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 650,
    },
    thead: {
        boxShadow: "inset 0px -10px 10px -10px rgba(94, 96, 109, 0.2)",
    },
    divider: {
        backgroundColor: "rgb(226, 231, 234)",
        width: "1px",
        height: "24px",
        display: "inline-block",
        position: "relative",
        right: "1px",
        float: "right"
    },
    headerCells: {
        paddingLeft: 0,
        paddingRight: 0,
    },
    title: {
        display: "inline-box",
        flexGrow: 1,
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2)
    },
    titleId: {
        display: "inline-box",
        flexGrow: 1,
        textAlign: "center"
    },
    priorityCell: {
        width: "10px",
        padding:"2px",
    },
    priority: {
        width: "5px",
        borderRadius:"2px",
        height: "70px",
    },
    tableRow: {
        height: "23px"
    },
    tableCell: {
        height: "23px",
        overflow: "hidden",
        padding: "2px 16px 2px 16px",
    },
    statusName: {
        borderRadius: "17px",
        color: "#fff",
        padding: "5px 10px",
        textTransform: "lowercase",
        whiteSpace: "nowrap",
        fontSize: "12px"        
    },
    root: {
        backgroundColor: "rgb(255, 255, 255)"
    }
}))

export default function TaskTable(props) {
    const classes = useStyles()
    
    const [tasks, setTasks] = useState([])
    const [fetchParams, setFetchParams] = useState({
        isFetching: false,
        top: Math.ceil(window.innerHeight / 75),
        skip: 0
    })

    useEffect(() => {
        const getData = async () => {
            const data = await getTasks({
                top: Math.ceil(window.innerHeight / 75),
                skip: 0
            })
            setTasks(data)
        }
        getData()
    }, [])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    useEffect(() => {
        if (!fetchParams.isFetching) return; 

        const getData = async () => {
            const data = await getTasks(fetchParams)
            setTasks(prevState => {
                return [
                    ...prevState,
                    ...data
                ]  
            })
        }

        getData()
    }, [fetchParams])

    function handleScroll() {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.scrollHeight) return;
  
        setFetchParams(prevState => { return {
            isFetching: true,
            top: prevState.top,
            skip: prevState.skip + prevState.top
        }})
    }

    const getPriorityColor = id => {
        const priorityColor = props.priorities.find((item) => item.id === id)
        return priorityColor ? priorityColor.rgb : "#fff"
    }

    return (
        <TableContainer className={classes.root}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead className={classes.thead}>
                    <TableRow>
                        <TableCell align="center" className={classes.status}>      
                        </TableCell>
                        <TableCell align="center" className={classes.headerCells}>      
                            <div className={classes.titleId}>ID</div>
                            <div className={classes.divider}></div>
                        </TableCell>
                        <TableCell align="left" className={classes.headerCells}>
                            <div className={classes.title}>Название</div>
                            <div className={classes.divider}></div>
                        </TableCell>
                        <TableCell align="left" className={classes.headerCells}>
                            <div className={classes.title}>Статус</div>
                            <div className={classes.divider}></div>
                        </TableCell>
                        <TableCell align="left" className={classes.headerCells}>  
                            <div className={classes.title}>Исполнитель</div>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tasks.map((row) => (
                        <TableRow 
                            key={row.id} 
                            onClick={e => props.openTask(row.id)} 
                            className={classes.tableRow} 
                            hover
                        >
                            <TableCell className={classes.priorityCell}>
                                <div className={classes.priority} style={{backgroundColor: getPriorityColor(row.priorityId)}}></div>
                            </TableCell>
                            <TableCell className={classes.tableCell}>{row.id}</TableCell>
                            <TableCell align="left" className={classes.tableCell}>{row.name}</TableCell>
                            <TableCell align="left" className={classes.tableCell}>
                                <div className={classes.statusName} style={{backgroundColor: row.statusRgb}}>
                                    {row.statusName}
                                </div>
                            </TableCell>
                            <TableCell align="left" className={classes.tableCell}>{row.executorName}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}