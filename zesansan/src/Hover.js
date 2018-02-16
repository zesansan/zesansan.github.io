import React, { Component } from 'react';
import './hover.css';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

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
    return this.setState({ hover: true });
  }
  hideHover() {
    return this.setState({ hover: false });
  }
  render() {
    const HoverRender = this.state.hover ? (
      <div className="hoverCard">
        <h1>{this.props.title}</h1>
        <p>{this.props.info}</p>
        <Button href={this.props.projectLink} target="_blank">
          Visit
        </Button>
      </div>
    ) : (
      <img src={this.props.image} className="card" />
    );
    return (
      <div onMouseOver={this.showHover} onMouseLeave={this.hideHover}>
        {HoverRender}
      </div>
    );
  }
}

export default Hover;
