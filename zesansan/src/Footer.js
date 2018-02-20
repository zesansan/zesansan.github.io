import React from 'react';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import { CardContent } from 'material-ui/Card';
import { Flex, Box } from 'grid-styled';

const styles = theme => ({
  card: {
    minWidth: 300,
    maxWidth: 1000,
    marginTop: 50
  },
  bodyText: {
    fontSize: 16,
    fontWeight: 600,
    color: theme.palette.text.primary,
    marginBottom: 20
  }
});

const Footer = props => {
  const { classes } = props;
  return (
    <CardContent className={classes.card}>
      <Flex wrap>
        <Box width={[1, 1 / 3]} mr={100}>
          <Typography className={classes.bodyText}>
            This website is made by yours truly using React in 2018.
          </Typography>
        </Box>
        <Box width={[1, 1 / 3]}>
          <Flex>
            <Box width={[1 / 3, 1 / 3]} mr={3}>
              <Typography className={classes.bodyText}>
                <a href="https://github.com/zesansan" className={classes.link}>
                  GITHUB
                </a>
              </Typography>
            </Box>
            <Box width={[1 / 3, 1 / 3]} mr={3}>
              <Typography className={classes.bodyText}>
                <a
                  href="https://www.linkedin.com/in/zejianshen/"
                  className={classes.link}
                >
                  LINKEDIN
                </a>
              </Typography>
            </Box>
            <Box width={[1 / 3, 1 / 3]} mr={3}>
              <Typography className={classes.bodyText}>
                <a href="https://twitter.com/zesansan" className={classes.link}>
                  TWITTER
                </a>
              </Typography>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </CardContent>
  );
};

export default withStyles(styles)(Footer);
