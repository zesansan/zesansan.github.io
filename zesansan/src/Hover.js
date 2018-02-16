import React, { Component } from 'react';
import './hover.css';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  card: {
    minWidth: 275,
    maxWidth: 600
  },
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
    fontWeight: 500,
    marginBottom: 20
  }
});

class Hover extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
    this.showHover = this.showHover.bind(this);
    this.hideHover = this.hideHover.bind(this);
  }
  showHover() {
    this.setState({ hover: true });
  }
  hideHover() {
    this.setState({ hover: false });
  }
  render() {
    const { classes } = this.props;
    const HoverRender = this.state.hover ? (
      <div className="hover-card" onMouseLeave={this.hideHover}>
        <h1 className={classes.title}>{this.props.title}</h1>
        <p className={classes.bodyText}>{this.props.info}</p>
        <Button href={this.props.projectLink} target="_blank">
          <Typography className={classes.button}>LEARN MORE</Typography>
        </Button>
      </div>
    ) : (
      <img
        src={this.props.image}
        className="card"
        onMouseOver={this.showHover}
      />
    );
    return <div>{HoverRender}</div>;
  }
}

export default withStyles(styles)(Hover);
