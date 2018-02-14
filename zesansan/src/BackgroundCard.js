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
          Former creative media producer at the Asian Art Museum. Born in
          Beijing, grew up in the Bay Area. Rhode Island School of Design class
          of 2010, Beijing Film Academy class of 2014. And now I'm back in
          school! And though the faces may have changed, the hassles are just
          the same.{' '}
        </Typography>
      </CardContent>
    </div>
  );
};

export default withStyles(styles)(BackgroundCard);
