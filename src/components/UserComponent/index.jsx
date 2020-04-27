import React from 'react';
import { Button, TextField, Box } from '@material-ui/core';
import { connect } from 'react-redux'
import action from '@store/actions'
import hippo from '@assets/img/hippo.svg';
import '@assets/css/font.css'
import { style_form } from './styles'
import LockOpenIcon from '@material-ui/icons/LockOpen';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import { formValidator } from '@hooks/login'
import { SimpleBackdrop,SimpleAlerts } from '@services/componentBase'
import { setLocalStorage } from '@services/public'
import { simpleBackdropHooks } from '@hooks/componentBase'
import { Redirect } from 'react-router'


function UserComponent(props) {

    console.log(props)

    // 自适应屏幕高度
    // const loginSizeHeight = LoginSize()

    // 输入框校验
    const formValidatorHooks = formValidator()
    const usernameValidator = (e) => (/^[-_a-zA-Z0-9]{1,10}$/.test(e))
    const passwordValidator = (e) => (/^[-_a-zA-Z0-9]{6,16}$/.test(e))
    const phoneValidator = (e) => (/^1(3|4|5|7|8)\d{9}$/.test(e))
    const validator = () => {
        formValidatorHooks.setValidator(
            {
                username: !usernameValidator(props.state.userInfoState.username),
                password: !passwordValidator(props.state.userInfoState.password),
                phone: !phoneValidator(props.state.userInfoState.phone),
            }
        )
        if (
            props.type == 'SignIn'
            && usernameValidator(props.state.userInfoState.username)
            && passwordValidator(props.state.userInfoState.password)
        ) {
            return true
        } else if (
            props.type == 'SignUp'
            && usernameValidator(props.state.userInfoState.username)
            && passwordValidator(props.state.userInfoState.password)
            && phoneValidator(props.state.userInfoState.phone)
        ) {
            return true
        } else {
            return false
        }

    }

    // material ui 样式
    const styles_form = style_form()
    // const styles_form = style_form([formValidatorHooks.validator, loginSizeHeight])
    const { open, setOpen } = simpleBackdropHooks()
    const signIn = () => {
        setOpen(true)
        console.log(open)
        if (validator()) {
            console.log('登陆')
            setTimeout(() => {
                setOpen(false)
                console.log(open)
            }, 1000);
        }

        console.log(props)

        //    console.log(11)
        // setLocalStorage('_token', '1')

        // props.history.push('/home')
    }


    const setPhoneComponent = () => {
        return (
            <TextField
                key="phone"
                label="phone"
                error={formValidatorHooks.validator.phone}
                className='phone'
                id="phone"
                helperText={formValidatorHooks.validator.phone ? '请输入正确的手机号码' : null}
                margin="dense"
                variant="outlined"
                onChange={(event) => {
                    props.setUserInfo({
                        username: props.state.userInfoState.username,
                        password: props.state.userInfoState.password,
                        phone: event.target.value,
                    })
                }}
            />
        )
    }

    return (
        <Box
            width={1}
            minHeight="calc(100vh)"
            component="div"
            bgcolor="grey.900"
            display="flex"
            alignItems="center"
            flexDirection="column"
            // paddingBottom={loginSizeHeight > 736 ? '9rem' : '0'}
            paddingTop='5rem'
        // justifyContent="center"
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
                fontSize="50px"
                textAlign="center"
                marginTop="20px"
                lineHeight="50px"
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
                    className='username'
                    id="username"
                    helperText={formValidatorHooks.validator.username ? '1到10位，特殊字符只能中/下划线' : null}
                    margin="dense"
                    variant="outlined"
                    onChange={(event) => {
                        props.setUserInfo({
                            username: event.target.value,
                            password: props.state.userInfoState.password,
                            phone: props.state.userInfoState.phone,
                        })
                    }}
                />
                <TextField
                    key="password"
                    label="password"
                    error={formValidatorHooks.validator.password}
                    className='password'
                    id="password"
                    helperText={formValidatorHooks.validator.password ? '6到16位，特殊字符只能中/下划线' : null}
                    margin="dense"
                    variant="outlined"
                    onChange={(event) => {
                        props.setUserInfo({
                            username: props.state.userInfoState.username,
                            password: event.target.value,
                            phone: props.state.userInfoState.phone,
                        })
                    }}
                    onKeyDown={(event) => { event.keyCode == 13 ? signIn() : null }}
                />
                {props.type == 'SignUp' ? setPhoneComponent() : null}
                <Button
                    variant="contained"
                    color="primary"
                    endIcon={props.type == 'SignIn' ? <LockOpenIcon /> : <PersonAddIcon />}
                    onClick={signIn}
                >
                    {props.type == 'SignIn' ? 'sign in' : 'sign up'}
                </Button>

                <Button
                    color="primary"
                    endIcon={props.type == 'SignIn' ? <PersonAddIcon /> : <LockOpenIcon />}
                    className='btn'
                    onClick={() => {
                        props.type == 'SignIn' ? props.history.push('/signup') : props.history.go(-1)
                    }}
                >
                    {props.type == 'SignIn' ? 'sign up' : 'sign in'}
                </Button>
                {/* < Redirect to="/home" /> */}
                <SimpleBackdrop state={open}/>
            </form>
                <SimpleAlerts title='123213' type='error'/>
        </Box >
    )

}


function select(state) {
    return { state: state }
}
export default connect(select, action)(UserComponent)