import React, { Component } from 'react';
import './hover.css';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  title: {
    fontSize: 30,
    fontWeight: 700
  },
  button: {
    fontSize: 15,
    fontWeight: 600,
    color: theme.palette.text.secondary
  },
  bodyText: {
    fontSize: 15,
    fontWeight: 500
  }
});

const Hover = props => {
  const { classes } = props;
  const style = {
    backgroundImage: `url(${props.image})`
  };
  return (
    <div className="card image-style" style={style}>
      <div className="overlay">
        <h1 className={classes.title}>{props.title}</h1>
        <p className={classes.bodyText}>{props.info}</p>
        <Button href={props.projectLink} target="_blank">
          <h4 className={classes.button}>LEARN MORE</h4>
        </Button>
      </div>
    </div>
  );
};

export default withStyles(styles)(Hover);
