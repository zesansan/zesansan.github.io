import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import TheRelish from './assets/therelish.png';
import Tunelark from './assets/tunelark.png';

const styles = {
  card: {
    minWidth: 400,
    maxWidth: 600,
    marginTop: 20
  },
  media: {
    height: 300
  }
};

function Projects(props) {
  const { classes } = props;
  return (
    <div>
      <div className={classes.card}>
        <CardMedia
          className={classes.media}
          image={TheRelish}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography variant="headline" component="h2">
            The Relish
          </Typography>
          <Typography component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except AntarcticaLizards are
            a widespread group of squamate reptiles, with over 6,000 species,
            ranging across all continents except Antarctica Lizards are a
            widespread group of squamate reptiles, with over 6,000 species,
            ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            color="primary"
            href="http://ambassadors.therelish.com/"
          >
            Learn More
          </Button>
        </CardActions>
      </div>
      <div className={classes.card}>
        <CardMedia
          className={classes.media}
          image={Tunelark}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography variant="headline" component="h2">
            Tunelark
          </Typography>
          <Typography component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except AntarcticaLizards are
            a widespread group of squamate reptiles, with over 6,000 species,
            ranging across all continents except Antarctica Lizards are a
            widespread group of squamate reptiles, with over 6,000 species,
            ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            color="primary"
            href="https://www.tunelark.com/home"
          >
            Learn More
          </Button>
        </CardActions>
      </div>
    </div>
  );
}

Projects.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Projects);
