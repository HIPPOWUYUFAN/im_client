import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux'
import { chatAction } from '@store/actions'
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import hippo from '@assets/img/hippo.svg';
import PersonIcon from '@material-ui/icons/Person';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import Chat from '@components/ChatListComponent'
import ChatContent from '@components/ChatContentComponent'
import ChatInput from '@components/ChatInputComponent'
import { useSnackbar } from 'notistack';
import ws from '@services/ws'
import { getLocalStorage } from '@services/public'
import { Redirect } from 'react-router'


const drawerWidth = 80;
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        '& .MuiToolbar-regular':{
            display:'flex',
            justifyContent: 'space-between',
        }
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
        boxShadow: theme.shadows[10],
        background: theme.palette.background.paper
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
    },
    content: {
        flex: 1,
        backgroundColor: theme.palette.background.drawer,
        height: 'calc(100vh)',
        display: 'flex',
        flexDirection: 'column',
    },
}));

function Home(props, state) {
    console.log(props)
    const classes = useStyles();
    const { enqueueSnackbar } = useSnackbar();

    const uid = getLocalStorage('_token') ? getLocalStorage('_token').user_id : null
    let scroll = useRef()
    function emit(e) {
        console.log(e)
        e ? scroll.current.scrollTop = scroll.current.scrollHeight : null
    }
    useEffect(() => {
        console.log('生命周期-----------------------')
        if(!uid)return 
        ws.emit('login', getLocalStorage('_token')).then(r => {
            console.log(r)
        })
        ws.on('getMessage', (data) => {
            if (data) {
                console.log(props)
                props.setChatMessage(
                    {
                        name: data.senderName,
                        content: {
                            name: data.senderName,
                            message: data.message
                        }
                    }
                ).then(r => {
                    emit(true)
                    console.log('接收成功', data)
                    console.log(scroll)
                })
            }
        })


        ws.on('getUsers', (data) => {
            console.log(data)
            if (data && data.add) {
                props.setChatListAdd(data.add).then(r => {
                    console.log('好友上线通知')
                    enqueueSnackbar(`${data.add.name}上线了！！！`, {
                        variant: 'info',
                        autoHideDuration: 1500,
                        preventDuplicate: true,
                        anchorOrigin: {
                            vertical: 'bottom',
                            horizontal: 'left',
                        },
                    })
                })
                let obj = {}
                obj[data.add.name] = []
                if (!props.state.chating) {
                    props.setChating(data.add.name)
                }
                props.setChats(obj).then(r => {
                    console.log('新增好友消息对象')
                })
            }
            if (data && data.del) {
                props.setChatListDel(data.del).then(r => {
                    console.log('好友下线通知')

                    enqueueSnackbar(`${data.del.name}离开了！！！`, {
                        variant: 'warning',
                        autoHideDuration: 1500,
                        preventDuplicate: true,
                        anchorOrigin: {
                            vertical: 'bottom',
                            horizontal: 'left',
                        },
                    })
                })
            }
        })

        ws.on('getUserList', (data) => {
            console.log(data)
            if (data && data.userList != {}) {
                let arr = []
                let obj = {}
                Object.keys(data.userList).map(p => {
                    console.log(p, uid)
                    if (p != uid) {
                        arr.push({ name: data.userList[p], uid: p })
                        obj[data.userList[p]] = []
                    }
                })
                if (arr.length) {
                    props.setChating(arr[0].name)
                }

                props.setChatList(arr).then(r => {
                    console.log('登录同步线上用户成功')
                })

                props.setChats(obj).then(r => {
                    console.log('新增线上用户消息对象')
                })
            }
        })

    }, []);

    function catchTabs(e, value) {
        console.log(e, value)
        if (value == 2) {
            enqueueSnackbar('该功能暂未开放', {
                variant: 'warning',
                autoHideDuration: 1500,
                preventDuplicate: true,
                anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'center',
                },
            })
        } else {
            props.setTabs(value)
        }
    };

    
    return (

        <div className={classes.root}>
            {!uid ? <Redirect to="/signin" /> : null}
            <CssBaseline />

            {/* 头部栏 */}
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" noWrap>
                        River house chat
                    </Typography>

                    <IconButton onClick={()=>window.open('https://github.com/HIPPOWUYUFAN/im_client')}>
                        <GitHubIcon/>
                    </IconButton>
                </Toolbar>
            </AppBar>

            {/* 侧边栏 */}
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor="left"
            >
                <div className={classes.toolbar}>
                    <IconButton >
                        <Box
                            component="img"
                            src={hippo}
                            width="40px"
                        />
                    </IconButton>
                </div>
                <Divider />

                {/* icon tabs */}
                <div className={classes.toolbar} >
                    <IconButton style={{ padding: 16 }} onClick={(ev) => { catchTabs(ev, 1) }} disabled={props.state.tabs == 1 ? true : false}>
                        <ChatBubbleIcon style={{ fontSize: 20 }} color={props.state.tabs == 1 ? "primary" : "action"} />
                    </IconButton>
                </div>
                <div className={classes.toolbar}>
                    <IconButton onClick={(ev) => { catchTabs(ev, 2) }} disabled={props.state.tabs == 2 ? true : false}>
                        <PersonIcon color={props.state.tabs == 2 ? "primary" : "action"} />
                    </IconButton>
                </div>
            </Drawer>


            <main className={classes.content}>
                <div className={classes.toolbar} style={{ padding: 0 }} />
                {props.state.chatList.length ?

                    <div style={{ display: 'flex', flex: 1, overflow: 'auto' }}>
                        <Chat emit={emit.bind(this)} />
                        <div style={{ flex: 1 }}>
                            <div style={{ height: '60%', overflow: 'auto' }} ref={scroll}>
                                <ChatContent />
                            </div>
                            <div style={{ height: '40%' }}>
                                <ChatInput emit={emit.bind(this)} />
                            </div>
                        </div>

                    </div> :
                    <div style={{ display: 'flex', flex: 1, overflow: 'auto' }}>
                        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', paddingBottom: '200px' }}>
                            <Box
                                component="img"
                                src={hippo}
                            /><br />
                            <span>暂无好友上线哦</span>
                        </div>
                    </div>
                }
            </main>
        </div>
    );
}


function select(state) {
    return { state: state.getChatInfo }
}
export default connect(select, chatAction)(Home)