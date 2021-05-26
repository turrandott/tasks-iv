import React from 'react'
import { makeStyles } from '@material-ui/core'

import Button from '../Button'
import Commentary from './Commentary'

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
    
    description: {    
        marginTop: theme.spacing(1),
        fontSize: "14px",
        fontFamily: "Roboto, sans-serif",
        color: "rgb(6, 6, 6)",
        lineHeight: "1.286"
    },
    
    commentaryArea: {
        marginTop: theme.spacing(8)
    },
    commentaries: {
        padding: theme.spacing(3)
    }
}))

function TaskEditMain (props) {
    const classes = useStyles()

    return (
        <div className={classes.taskMain}>
            <label className={classes.label}>Описание</label>
            <div 
                className={classes.description}
                dangerouslySetInnerHTML={{
                    __html: props.description
                }}>
            </div>

            <div className={classes.commentaryArea}>
                <label className={classes.label}>Добавление комментариев</label>
                <textarea 
                    id="comment"
                    name="comment"
                    value={props.comment}
                    onChange={props.handleChange}
                    className={classes.textArea} 
                    rows="4"
                />
            </div>
            <Button onClick={props.handleUpdateTask}>Сохранить</Button>

            {props.lifetimeItems && 
                <div className={classes.commentaries}>
                    {props.lifetimeItems.map((item) => 
                        <Commentary key={item.id} commentary={item}/>
                    )}
                </div> 
            }
        </div>      
    )
}

export default TaskEditMain