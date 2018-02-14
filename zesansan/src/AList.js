import React from 'react';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import List, { ListItem, ListItemText } from 'material-ui/List';

const styles = theme => ({
  root: {
    minWidth: 100,
    maxWidth: 150
  },
  title: {
    fontSize: 15,
    fontWeight: 600,
    color: theme.palette.text.primary
  },
  item: {
    fontSize: 15,
    marginLeft: -15,
    marginBottom: -20
  }
});

const AList = props => {
  const { classes } = props;
  const ListContent = props.listItems.map((prop, idx) => (
    <ListItem key={idx}>
      <ListItemText
        primary={prop}
        disableTypography="false"
        className={classes.item}
      />
    </ListItem>
  ));
  return (
    <div className={classes.root}>
      <List component="nav">
        <Typography className={classes.title}>{props.listTitle}</Typography>
        {ListContent}
      </List>
    </div>
  );
};

export default withStyles(styles)(AList);
