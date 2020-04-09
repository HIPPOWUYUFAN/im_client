import { makeStyles } from '@material-ui/core/styles';


export const style_form = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 250,
            display: 'flex',
            flexDirection: 'column',
        },
        '& .MuiButton-root': {
            width: 250,
            marginTop: 20,
        },
    },
}));