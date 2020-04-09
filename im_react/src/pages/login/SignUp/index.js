import React from 'react';
import { Button, TextField, Box } from '@material-ui/core';
import { connect } from 'react-redux'
import action from '@store/actions'
import hippo from '@assets/img/hippo.svg';
import '@assets/css/font.css'
import { style_form } from '../styles'
import LockOpenIcon from '@material-ui/icons/LockOpen';
import { LoginSize, formValidator } from '@hooks'

function SignUp(props) {
    const loginSizeHeight = LoginSize()
    const styles_form = style_form()
    const formValidatorHooks = formValidator()
    const usernameValidator = (e) => (/^[-_a-zA-Z0-9]{1,10}$/.test(e))
    const passwordValidator = (e) => (/^[-_a-zA-Z0-9]{6,16}$/.test(e))
    const validator = () => {
        formValidatorHooks.setValidator(
            {
                username: !usernameValidator(props.state.userInfoState.username),
                password: !passwordValidator(props.state.userInfoState.password),
            }
        )
        if (
            usernameValidator(props.state.userInfoState.username)
            && usernameValidator(props.state.userInfoState.username)
        ) {
            return true
        } else {
            return false
        }
    }
    const signIn = () => {
        if (validator()) {
            console.log('登陆')
        }
    }
    return (
        <Box
            width={1}
            height="calc(100vh)"
            component="div"
            bgcolor="grey.900"
            display="flex"
            alignItems="center"
            flexDirection="column"
            paddingBottom={loginSizeHeight > 667 ? '9rem' : '0'}
            justifyContent="center"
        >
            <Box
                component="img"
                src={hippo}
                width="100px"
            >
            </Box>
            <Box
                component="span"
                className='web-font'
                fontSize="45px"
                textAlign="center"
                marginTop="20px"
                lineHeight="45px"
                marginBottom="30px"
            >
                river house
                <br />
                Chat
            </Box>
            <form
                className={styles_form.root}
                noValidate
                style={{ display: 'contents', alignItems: 'center' }}
            >
                <TextField
                    label="username"
                    key="username"
                    error={formValidatorHooks.validator.username}
                    id="outlined-margin-dense"
                    helperText={formValidatorHooks.validator.username ? '1到10位，特殊字符只能中/下划线' : null}
                    margin="dense"
                    variant="outlined"
                    onChange={(event) => {
                        props.setUserInfo({
                            username: event.target.value,
                            password: props.state.userInfoState.password
                        })
                    }}
                />
                <TextField
                    key="password"
                    label="password"
                    error={formValidatorHooks.validator.password}
                    id="outlined-margin-dense"
                    helperText={formValidatorHooks.validator.password ? '4到16位，特殊字符只能中/下划线' : null}
                    margin="dense"
                    variant="outlined"
                    onChange={(event) => {
                        props.setUserInfo({
                            username: props.state.userInfoState.username,
                            password: event.target.value,
                        })
                    }}
                    onKeyDown={(event) => { event.keyCode == 13 ? signIn() : null }}
                />
                <Button
                    variant="contained"
                    color="primary"
                    endIcon={<LockOpenIcon />}
                    onClick={signIn}
                >
                    sign in
                </Button>
            </form>

        </Box>
    )

    // }
}


function select(state) {
    return { state: state }
}

export default connect(select, action)(SignUp)