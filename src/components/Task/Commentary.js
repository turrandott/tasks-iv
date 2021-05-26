import React from 'react'
import { makeStyles, Avatar } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(3)
    },
    large: {
        borderWidth: "1px",
        borderColor: "rgb(197, 205, 211)",
        borderStyle: "solid",
        borderRadius: "50%",
        backgroundColor: "rgb(245, 245, 245)",
    },
    userInfo: {
        display: "flex"
    },
    userName: {
        fontSize: "14px",
        fontFamily: "Ubuntu, sans-serif",
        color: "rgb(82, 84, 96)",
        lineHeight: "1.2",
        marginLeft: theme.spacing(2)
    },
    about: {
        marginLeft: theme.spacing(2),
        marginTop: theme.spacing(2),
        fontSize: "12px",
        fontfamily: "CorporateACyr, sans-serif",
        color: "rgb(99, 103, 124)",
        lineHeight: "1.2",    
    },
    description: {    
        fontSize: "14px",
        fontFamily: "Roboto, sans-serif",
        color: "rgb(6, 6, 6)",
        lineHeight: "1.286",
        borderRadius: "5px",
        backgroundColor: "rgb(227, 233, 244)",
        boxShadow: "0px 0px 3px 0px rgba(0, 0, 0, 0.2)",
        padding: theme.spacing(2), 
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(4)   
    },
}))

function Commentary (props) {
    const classes = useStyles()

    const getAbout = () => {
        const date = new Date(props.commentary.createdAt)
        return date.toLocaleString('ru', {day: 'numeric', month: 'long', hour: 'numeric', minute: 'numeric'}) + ' прокомментировал'
    }

    return (
        <div className={classes.root}>
            <div className={classes.userInfo}>
                <Avatar alt={props.commentary.userName} src={''} className={classes.large} />
                <div>
                    <div className={classes.userName}>{props.commentary.userName}</div>
                    <div className={classes.about}>{getAbout()}</div>
                </div>
            </div>
            <div 
                className={classes.description}
                dangerouslySetInnerHTML={{
                    __html: props.commentary.comment
                }}>
            </div>
        </div>
    )
}

export default Commentary