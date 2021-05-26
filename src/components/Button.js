import React from 'react'
import { makeStyles, Button } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    button: {
        backgroundColor: "rgb(0, 140, 240)",
        height: "40px",
        width: "180px",
        borderRadius: "40px",
        border: "none",
        fontSize: "16px",
        color: "rgb(255, 255, 255)",
        lineHeight: "1.2",
        textAlign: "center",
        margin: theme.spacing(3),
        "&:hover": {
            backgroundColor: "rgb(14, 108, 202)"
        },
        textTransform: "none"
    },
}))

function ButtonStyled(props) {
    const classes = useStyles()

    return (
        <Button className={classes.button} onClick={props.onClick}>
            {props.children}
        </Button>
    )
}

export default ButtonStyled