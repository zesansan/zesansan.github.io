import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import TheRelish from './assets/therelish.png';
import Tunelark from './assets/tunelark.png';
import './hover.css';

const styles = {
  card: {
    minWidth: 300,
    maxWidth: 600,
    marginTop: 20
  },
  media: {
    height: 300
  }
};

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { isShowing: false };
    this.showInfo = this.showInfo.bind(this);
  }
  showInfo() {
    this.setState({ isShowing: !this.state.isShowing });
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className={classes.card} id="theRelish">
          <img src={TheRelish} alt="the relish" className={classes.card} />
          <div id="overlay">
            <Typography variant="headline" component="h2">
              The Relish
            </Typography>
            <Typography component="p">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except
              AntarcticaLizards are a widespread group of squamate reptiles,
              with over 6,000 species, ranging across all continents except
              Antarctica Lizards are a widespread group of squamate reptiles,
              with over 6,000 species, ranging across all continents except
              Antarctica
            </Typography>
            <Button>Test</Button>
          </div>
        </div>

        <div className={classes.card}>
          <CardMedia
            className={classes.media}
            image={Tunelark}
            title="Tunelark"
          />
          <CardContent>
            <Typography variant="headline" component="h2">
              Tunelark
            </Typography>
            <Typography component="p">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except
              AntarcticaLizards are a widespread group of squamate reptiles,
              with over 6,000 species, ranging across all continents except
              Antarctica Lizards are a widespread group of squamate reptiles,
              with over 6,000 species, ranging across all continents except
              Antarctica
            </Typography>
          </CardContent>
        </div>
      </div>
    );
  }
}
Projects.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Projects);
