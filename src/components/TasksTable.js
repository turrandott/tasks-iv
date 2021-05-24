import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { getTasks } from '../api'

const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 650,
    },
    thead: {
        boxShadow: "inset 0px -10px 10px -10px rgba(94, 96, 109, 0.2)",
        // paddingTop: theme.spacing(2),
        // paddingBottom: theme.spacing(2),
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
        // alignItems: "center"
    },
    title: {
        display: "inline-box",
        flexGrow: 1,
        marginLeft: theme.spacing(2)
    },
    titleId: {
        display: "inline-box",
        flexGrow: 1,
        textAlign: "center"
    },
    status: {
        width: "10px",
        padding:"2px",
        // backgroundColor: "red"
    },
    statusCell: {
        width: "5px",
        borderRadius:"2px",
        // backgroundColor: "red"
    }
}))

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function TaskTable() {
    const [tasks, setTasks] = useState([])
    const classes = useStyles()

    useEffect(() => {
        const getData = async () => {
            const data = await getTasks()
            setTasks(data)
        }
        
        getData()
    }, [])

    const openTask = (task) => {
        
    }

    console.log('tasks', tasks)

    return (
        <TableContainer >
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
                        <TableRow key={row.id} onClick={openTask(row.id)}>
                            <TableCell className={classes.status}>
                            <div className={classes.statusCell} style={{backgroundColor: row.statusRgb}}></div>
                            </TableCell>
                            <TableCell 
                            // component="th" scope="row" align="right"
                            >
                                {row.id}
                            </TableCell>
                            <TableCell align="left">{row.name}</TableCell>
                            <TableCell align="left">{row.statusName}</TableCell>
                            <TableCell align="left">{row.executorName}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}