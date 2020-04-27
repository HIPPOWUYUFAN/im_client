import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Alert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';




const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
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
            <Backdrop className={classes.backdrop} open={props.state} >
                <CircularProgress color="primary" />
            </Backdrop>
        </div>
    );
}



export const SimpleAlerts = function (props) {
    const classes = useStyles();
    console.log(props)
    return (
      <div className={classes.root}>
        <Alert severity={props.type}>{props.title}</Alert>
      </div>
    );
  }