import React from 'react';
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
    WebkitScrollSnapPointsY: '0'

  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));

function Chat(props) {
  console.log(props)
  const classes = useStyles();
  const { chating, chatList, setChating } = props
  function chatChange(e){
    setChating(e).then(r=>{
      props.emit(true)
    })
  }
  return (
    <List className={classes.root}>
      {
        chatList.map(p => {
          return (
            <ListItem button selected={p.name == chating} divider dense key={p.name} onClick={() => { p.name != chating ?  chatChange(p.name): null }} >
              <ListItemAvatar>
                <Avatar className={classes.purple}>
                  {p.name.substr(0,1)}
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={p.name} secondary={p.lastMessage} />
            </ListItem>
          )
        })
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
export default connect(select, chatAction,null,{forwardRef:true})(Chat)