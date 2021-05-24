import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import { drawerWidth } from '../utils'
import searchImg from './noun_Search_449332.png'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        backgroundColor: "rgb(209, 224, 237)",
        boxShadow: "0px 0px 7px 0px rgba(0, 0, 0, 0.2)",    
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
    search: {
        borderWidth: "1px",
        borderColor: "rgb(66, 170, 255)",
        borderStyle: "solid",
        backgroundColor: "rgb(255, 255, 255)",
        boxShadow: "0px 0px 7px 0px rgba(0, 140, 240, 0.15),inset 0px 1px 7px 0px rgba(0, 0, 0, 0.11)",
        width: "50%",
        minWidth: "500px",
        height: "38px",
        borderRadius: "38px",
        paddingLeft: "16px",
        paddingRight: "8px",
        outline: "none",
        display: "flex"
    },
    searchInput: {
        outline: "none",
        border: "none",
        backgroundColor: "transparent",
        flexGrow: 1
    },
    searchImg: {
        transform: "scaleX(-1)"
    }
}));

function Header (props) {
    const classes = useStyles();
    return (
        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
                <div className={classes.search}>
                    <input className={classes.searchInput}></input>
                    <img className={classes.searchImg} src={searchImg}></img>
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default Header