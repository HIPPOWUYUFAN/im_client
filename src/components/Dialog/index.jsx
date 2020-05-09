import React from 'react';
import Chip from '@material-ui/core/Chip';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, deepPurple } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
        alignItems: 'flex-start',
        '& .MuiChip-label': {
            wordBreak: 'break-all',
            textAlign: 'justify',
            whiteSpace: 'pre-wrap',
            padding: '10px 15px'
        }
    },
    orange: {
        color: theme.palette.getContrastText(deepOrange[500]),
        backgroundColor: deepOrange[500],
    },
    purple: {
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[500],
    },
    chip: {
        minHeight: 40,
        maxWidth: 'calc(50% - 50px)',
        height: 'auto'
    },

}));

export const Dialog_left =  function() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Avatar className={classes.purple}>H</Avatar>
            <Chip color="primary" label="我是你吗我是你吗我是你吗我是你吗我是你吗我是你吗我是你吗" className={classes.chip} />
        </div>

    )
}


export const Dialog_right =  function() {
    const classes = useStyles()
    return (
        <div className={classes.root}  style={{'justifyContent': 'flex-end'}}>
            <Chip color="primary" label="我是你吗我是你吗我是你吗我是你吗我是你吗我是你吗我是你吗"  className={classes.chip}/>
            <Avatar className={classes.orange}>H</Avatar>
        </div>

    )
}


