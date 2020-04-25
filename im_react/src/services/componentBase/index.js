import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import { simpleBackdropHooks } from '@hooks/componentBase'
const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));

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