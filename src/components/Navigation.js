import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

import { drawerWidth } from '../utils'
import logo from '../assets/logo.png'
import book from '../assets/book.png'
import file from '../assets/file.png'
import people from '../assets/people.png'
import city from '../assets/city.png'
import analytics from '../assets/analytics.png'
import settings from '../assets/settings.png'

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
    },
    logo: {
        height: "70px",
        width: "70px"
    },
    logoContainer: {
        justifyContent: "center"
    },
    menuItem: {
        flexDirection: "column",
    },
    menuItemActive: {
        flexDirection: "column",
        backgroundColor: "rgb(0, 44, 73)"
    },
    img: {
        filter: "invert(1)",
        height: "50px",
        width: "50px",
        marginBottom: "-10px"
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
            <List>
                <ListItem key="logo" className={classes.logoContainer}>
                    <img src={logo} alt="logo" className={classes.logo}/> 
                </ListItem>
                <ListItem 
                    button 
                    key="base" 
                    className={props.openPage === "База знаний" ? classes.menuItemActive : classes.menuItem}
                    onClick={e => {props.setOpenPage("База знаний")}}
                >
                    <img src={book} alt="base" className={classes.img}/> 
                    <ListItemText primary={"База знаний"} className={classes.textCentered}/>
                </ListItem>
                <ListItem 
                    button key="tasks" 
                    className={props.openPage === "tasks" ? classes.menuItemActive : classes.menuItem}
                    onClick={e => {props.setOpenPage("tasks")}}
                >
                    <img src={file} alt="tasks" className={classes.img}/> 
                    <ListItemText primary={"Заявки"} className={classes.textCentered}/>
                </ListItem>
                <ListItem 
                    button key="staff" 
                    className={props.openPage === "Сотрудники" ? classes.menuItemActive : classes.menuItem}
                    onClick={e => {props.setOpenPage("Сотрудники")}}
                >
                    <img src={people} alt="staff" className={classes.img}/> 
                    <ListItemText primary={"Сотрудники"} className={classes.textCentered}/>
                </ListItem>
                <ListItem 
                    button key="clients" 
                    className={props.openPage === "Клиенты" ? classes.menuItemActive : classes.menuItem}
                    onClick={e => {props.setOpenPage("Клиенты")}}
                >
                    <img src={city} alt="clients" className={classes.img}/> 
                    <ListItemText primary={"Клиенты"} className={classes.textCentered}/>
                </ListItem>
                <ListItem 
                    button key="assets" 
                    className={props.openPage === "Активы" ? classes.menuItemActive : classes.menuItem}
                    onClick={e => {props.setOpenPage("Активы")}}
                >
                    <img src={analytics} alt="assets" className={classes.img}/> 
                    <ListItemText primary={"Активы"} className={classes.textCentered}/>
                </ListItem>
                <ListItem 
                    button key="settings" 
                    className={props.openPage === "Настройки" ? classes.menuItemActive : classes.menuItem}
                    onClick={e => {props.setOpenPage("Настройки")}}
                >
                    <img src={settings} alt="settings" className={classes.img}/> 
                    <ListItemText primary={"Настройки"} className={classes.textCentered}/>
                </ListItem>
            </List>
        </Drawer>
    )
}

export default Navigation