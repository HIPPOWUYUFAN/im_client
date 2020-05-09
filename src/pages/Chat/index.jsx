import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  root: {
    // width: '100%',
    height:'calc(100vh)',
    width: 280,
    backgroundColor: theme.palette.background.drawer,
    overflow: 'auto',
    // borderRight:'1px solid #202020',
    boxShadow:theme.shadows[8]
  },
}));

export default function Chat() {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <ListItem button  selected divider dense>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Photos" secondary="Jan 9, 2014" />
      </ListItem>
      {/* <Divider variant="inset" component="li" /> */}
    </List>
  );
}