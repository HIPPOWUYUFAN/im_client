import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Alert from '@material-ui/lab/Alert';
import Collapse from '@material-ui/core/Collapse';
import { makeStyles } from '@material-ui/core/styles';
import { componentBollHooks } from '@hooks/componentBase'




const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
    root: {
        width: 'auto',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
        position: 'fixed',
        top: '10px',
        zIndex: 100000,
    },
}));


/**
 * loading component
 * @param {*} props 
 */
export const SimpleBackdrop = function (props) {
    const classes = useStyles();
    return (
        <div>
            <Backdrop className={classes.backdrop} open={props.status} >
                <CircularProgress color="primary" />
            </Backdrop>
        </div>
    );
}



export const SimpleAlerts = function (props) {
    const classes = useStyles();
   
    if (props.status) {
        setTimeout(() => {
            props.callback()
        }, 2000);
    }
    return (
        <div className={classes.root}>
            <Collapse in={props.status||false}>
                <Alert severity={props.type||'error'}>{props.text||null}</Alert>
            </Collapse>
        </div>
    );

}