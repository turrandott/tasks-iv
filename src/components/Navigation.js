import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

import { drawerWidth } from '../utils'

const useStyles = makeStyles((theme) => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        
    },
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: "#002137",
        fontSize: "12px",
        fontFamily: "Roboto",
        color: "rgb(255, 255, 255)",
        lineHeight: 1.2,
    },
    textCentered: {
        textAlign: "center"
    }
}))

function Navigation (props) {
    const classes = useStyles()
    return (
        <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
                paper: classes.drawerPaper,
            }}
            anchor="left"
        >
            {/* <div className={classes.toolbar} /> */}
            <List>
                <ListItem button key="base">
                    {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
                    <ListItemText primary={"База знаний"} className={classes.textCentered}/>
                </ListItem>
                <ListItem button key="tasks">
                    {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
                    <ListItemText primary={"Заявки"} className={classes.textCentered}/>
                </ListItem>
                <ListItem button key="staff">
                    {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
                    <ListItemText primary={"Сотрудники"} className={classes.textCentered}/>
                </ListItem>
                <ListItem button key="clients">
                    {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
                    <ListItemText primary={"Клиенты"} className={classes.textCentered}/>
                </ListItem>
                <ListItem button key="assets">
                    {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
                    <ListItemText primary={"Активы"} className={classes.textCentered}/>
                </ListItem>
                <ListItem button key="settings">
                    {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
                    <ListItemText primary={"Настройки"} className={classes.textCentered}/>
                </ListItem>
            </List>
        </Drawer>
    )
}

export default Navigation