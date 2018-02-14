import React from 'react';
import { CardContent } from 'material-ui/Card';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  card: {
    minWidth: 300,
    maxWidth: 600
  },
  bodyText: {
    fontSize: 15,
    fontWeight: 500
  }
});

const BackgroundCard = props => {
  const { classes } = props;
  return (
    <div className={classes.card}>
      <CardContent>
        <Typography className={classes.bodyText}>
          Web developer experienced with ReactJS/Redux, Node.js, Express,
          JavaScript and Python. I'm always looking for opportunities to learn
          and collaborate with other programmers. Feel free to browse around my
          portfolio and get in contact with me.{' '}
        </Typography>
      </CardContent>
    </div>
  );
};

export default withStyles(styles)(BackgroundCard);
