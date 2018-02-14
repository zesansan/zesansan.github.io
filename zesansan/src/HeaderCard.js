import React from 'react';
import { CardContent } from 'material-ui/Card';
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
    fontWeight: 700,
    color: theme.palette.text.primary
  },
  bodyText: {
    fontSize: 20,
    fontWeight: 500,
    color: theme.palette.text.primary,
    marginBottom: 20
  },
  git: {
    fontWeight: 600,
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
        <Typography className={classes.title}>
          Hello, <Emoji text=":wave:" />.
        </Typography>
        <Typography className={classes.bodyText}>
          My name is Zejian (ZEE-<em>jen</em>), I am a full stack web developer
          and
          <Emoji text=" cute animal petter :dog: based in SF." />
        </Typography>
        <Typography className={classes.git}>
          Get in touch{' '}
          <a href="mailto:zesansan@gmail.com" className={classes.link}>
            zesansan@gmail.com
          </a>{' '}
          or <Emoji text=":eyes:" />{' '}
          <a href="/ZejianResume.pdf" className={classes.link}>
            resume
          </a>.
        </Typography>
      </CardContent>
    </div>
  );
};

export default withStyles(styles)(HeaderCard);
