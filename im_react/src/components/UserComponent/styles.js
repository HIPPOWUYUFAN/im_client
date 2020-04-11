import { makeStyles, createStyles } from '@material-ui/core/styles';
// import { LoginSize, formValidator } from '@hooks'

// const formValidatorHooks = formValidator

export const style_form = makeStyles((theme) => (
    console.log(theme),
    {

        root: {
            '& .MuiFormControl-marginDense': {
                width: 250,
                display: 'flex',
                flexDirection: 'column',
            },
            // '& .username': {
            //     margin: (props) => props[0].username && props[1] <= 667 ? 0 : theme.spacing(1),
            //     color: (props, height) => console.log(props, height)
            // },
            // '& .password': {
            //     margin: (props) => props[0].password && props[1] <= 667 ? 0 : theme.spacing(1),
            // },
            // '& .phone': {
            //     margin: (props) => props[0].phone && props[1] <= 667 ? 0 : theme.spacing(1),
            // },
            '& .MuiButton-root': {
                width: 250,
                marginTop: 20,
            },
            '& .btn': {
                marginBottom:'2rem'
            }
        },
    }
));
