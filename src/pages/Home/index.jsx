import React from 'react';
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
import hippo from '@assets/img/hippo.svg';
import PersonIcon from '@material-ui/icons/Person';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import Chat from '@components/ChatListComponent'
import ChatContent from '@components/ChatContentComponent'
import ChatInput from '@components/ChatInputComponent'
import { useSnackbar } from 'notistack';
import List from '@material-ui/core/List';
import { useRef } from 'react';



const drawerWidth = 80;
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        // '& .MuiTextField-root': {
        //     width: '100%',
        //     height: "100%"
        // },
        // '& .MuiOutlinedInput-multiline': {
        //     height: "100%",
        //     width: '100%',
        // },
        // '& .MuiInputBase-root': {
        //     alignItems: 'flex-start'
        // },
        // '& .MuiOutlinedInput-root': {
        //     borderRadius: 0
        // },
        // '& .MuiOutlinedInput-inputMultiline': {
        //     height: '100% !important',
        //     overflow: 'auto !important'
        // },
        // '& .MuiOutlinedInput-notchedOutline': {
        //     borderWidth: '1px 0 0 0',
        // },
        // '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
        //     borderWidth: '1px 0 0 0',
        //     outline: 0,
        // },
        // '& .MuiPaper-root':{
        //     backgroundColor:theme.palette.background.paper
        // }
    },
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
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
        // padding: theme.spacing(3),
        backgroundColor: theme.palette.background.drawer,
        height: 'calc(100vh)',
        display: 'flex',
        flexDirection: 'column',
        // overflow: 'hidden'
    },
}));
function Home(props, state) {
    console.log(props)
    const classes = useStyles();
    const { enqueueSnackbar } = useSnackbar();

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

    let scroll = useRef()
    function emit(e) {
        console.log(e)
        e?scroll.current.scrollTop = scroll.current.scrollHeight:null
    }
    return (

        <div className={classes.root}>
            <CssBaseline />

            {/* 头部栏 */}
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" noWrap>
                        River house chat
                    </Typography>
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
                <div style={{ display: 'flex', flex: 1, overflow: 'auto' }}>
                    <Chat emit={emit.bind(this)}/>
                    <div style={{ flex: 1 }}>
                        <div style={{ height: '60%', overflow: 'auto' }} ref={scroll}>
                            <ChatContent />
                        </div>
                        {/* <div ref={scroll}>
                        </div> */}
                        <div style={{ height: '40%' }}>
                            <ChatInput emit={emit.bind(this)} />
                        </div>
                    </div>
                </div>

            </main>
        </div>
    );
}


function select(state) {
    return { state: state.getChatInfo }
}
export default connect(select, chatAction)(Home)