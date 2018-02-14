import React from 'react';
import { CardActions, CardContent } from 'material-ui/Card';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Emoji from 'react-emoji-render';

const styles = theme => ({
  card: {
    minWidth: 275,
    maxWidth: 600
  },
  title: {
    fontSize: 30,
    color: theme.palette.text.primary
  },
  bodyText: {
    fontSize: 20,
    color: theme.palette.text.primary,
    marginBottom: 20
  },
  git: {
    fontSize: 18
  },
  link: {
    color: '#304FFE'
  }
});

const HeaderCard = props => {
  const { classes } = props;
  return (
    <div className={classes.card}>
      <CardContent>
        <Typography className={classes.title}>hello fren, it's me.</Typography>
        <Typography className={classes.bodyText}>
          I'm Zejian (ZEE-jen) Shen, an artist turned <Emoji text=":baby:" />{' '}
          software engineer based in SF and living that{' '}
          <em>cowabunga lifestyle</em>.
        </Typography>
        <Typography className={classes.git}>
          get in touch <Emoji text=":wave:" />{' '}
          <a href="" className={classes.link}>
            zesansan@gmail.com
          </a>.
        </Typography>
      </CardContent>
    </div>
  );
};

export default withStyles(styles)(HeaderCard);
