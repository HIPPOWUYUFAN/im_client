import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { deepPurple } from '@material-ui/core/colors';
import '@assets/css/webkit.sass'
import { connect } from 'react-redux'
import { chatAction } from '@store/actions'
import ws from '@services/ws'
import { getLocalStorage } from '@services/public'
import { useSnackbar } from 'notistack';

const useStyles = makeStyles((theme) => ({
  root: {
    // width: '100%',
    // height:'calc(100vh)',
    width: 280,
    backgroundColor: theme.palette.background.drawer,
    boxShadow: theme.shadows[8],
    overflow: 'hidden',
    overflow: 'auto',
    padding: 0,
    WebkitScrollSnapPointsY: '0',

    '& .MuiTypography-colorTextSecondary': {
      minHeight: 20,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    }
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));

function Chat(props) {
  console.log(props)
  const classes = useStyles();
  const { chating, chatList, setChating, setChatListAdd, setChatListDel, setChatList, setChats } = props
  const uid = getLocalStorage('_token').user_id

  function chatChange(e) {
    setChating(e).then(r => {
      props.emit(true)
    })
  }

  const { enqueueSnackbar } = useSnackbar();
  useEffect(() => {
    console.log('生命周期')

    ws.on('getUsers', (data) => {
      console.log(data)
      if (data && data.add) {
        setChatListAdd(data.add).then(r => {
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
        if(!chating){
          setChating(data.add.name)
        }
        setChats(obj).then(r => {
          console.log('新增好友消息对象')
        })
      }
      if (data && data.del) {
        setChatListDel(data.del).then(r => {
          console.log('好友下线通知')
        })
      }
    })

    ws.on('getUserList', (data) => {
      console.log(data)
      if (data && data.userList != {}) {
        let arr = []
        let obj = {}
        Object.keys(data.userList).map(p => {
          console.log(p,uid)
          if (p != uid) {
            arr.push({ name: data.userList[p], uid: p })
            obj[data.userList[p]] = []
          }
        })
        if(arr.length){
          setChating(arr[0].name)
        }

        setChatList(arr).then(r => {
          console.log('登录同步线上用户成功')
        })

        setChats(obj).then(r => {
          console.log('新增线上用户消息对象')
        })
      }
    })


  }, []);
  return (
    <List className={classes.root}>
      {chatList && chatList.length ?
        chatList.map(p => {
          return (
            <ListItem button selected={p.name == chating} divider dense key={p.name} onClick={() => { p.name != chating ? chatChange(p.name) : null }} >
              <ListItemAvatar>
                <Avatar className={classes.purple}>
                  {p.name.substr(0, 1)}
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={p.name} secondary={p.lastMessage ? p.lastMessage : ' '} />
            </ListItem>
          )
        }) : '还没有伙伴上线'
      }
    </List>
  );
}


function select(state) {
  return {
    chating: state.getChatInfo.chating,
    chatList: state.getChatInfo.chatList
  }
}
export default connect(select, chatAction, null, { forwardRef: true })(Chat)