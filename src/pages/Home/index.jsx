// import React, { Component } from 'react';



// export default class Home extends Component {

//     render() {
//         console.log(this.props)
//         return (
//             <div>
//                 <div>Home,13213</div>


//                 {/* <HomeRouter /> */}
//             </div>
//         )
//     }
// }

import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
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
import Chat from '@pages/Chat'
import {Dialog_left,Dialog_right} from '@components/Dialog'


const drawerWidth = 80;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
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
        // backgroundColor: theme.palette.background.drawer,
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
    },

    content: {
        flexGrow: 1,
        // padding: theme.spacing(3),
        backgroundColor: theme.palette.background.drawer,
        height: 'calc(100vh)',
        // display: 'flex',
        overflow: 'hidden'
    },
}));

export default function Home() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CssBaseline />

            {/* 头部栏 */}
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" noWrap>
                        Permanent drawer
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
                <div className={classes.toolbar}>
                    <IconButton style={{ padding: 16 }}>
                        <ChatBubbleIcon style={{ fontSize: 20 }} />
                    </IconButton>
                </div>
                <div className={classes.toolbar}>
                    <IconButton>
                        <PersonIcon />
                    </IconButton>
                </div>
            </Drawer>


            <main className={classes.content}>
                <div className={classes.toolbar} style={{ padding: 0 }} />
                <div style={{ display: 'flex' }}>
                    <Chat />
                    <div style={{ flex: 1 }}>
                        <Dialog_left />
                        <Dialog_right />
                    </div>
                </div>

            </main>
        </div>
    );
}