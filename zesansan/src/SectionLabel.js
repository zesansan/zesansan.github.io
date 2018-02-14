import React from 'react';
import { CardContent } from 'material-ui/Card';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  card: {
    minWidth: 100,
    maxWidth: 300
  },
  title: {
    fontSize: 15,
    fontWeight: 700,
    color: '#304FFE',
    textAlign: 'right'
  }
});

const SectionLabel = props => {
  const { classes } = props;
  return (
    <div>
      <CardContent className={classes.card}>
        <Typography className={classes.title}>{props.sectionName}</Typography>
      </CardContent>
    </div>
  );
};

export default withStyles(styles)(SectionLabel);
