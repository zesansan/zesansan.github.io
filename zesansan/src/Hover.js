import React, { Component } from 'react';
import './App.css';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  title: {
    fontSize: 30,
    fontWeight: 700
  },
  button: {
    fontSize: 15,
    fontWeight: 600,
    color: '#FFFFFF',
    backgroundColor: '#304ffe'
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
        <br />
        <button>
          <a href={props.projectLink} target="_blank">
            LEARN MORE
          </a>
        </button>
      </div>
    </div>
  );
};

export default withStyles(styles)(Hover);
