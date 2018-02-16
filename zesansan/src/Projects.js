import React from 'react';
import Hover from './Hover';
import TheRelish from './assets/therelish.png';
import Tunelark from './assets/tunelark.png';

const Projects = props => {
  return (
    <div>
      <Hover
        title="The Relish"
        info="full stack implementation"
        projectLink="http://therelish.com"
        image={TheRelish}
        alternativeText="The Relish"
      />
      <Hover
        title="Tunelark"
        info="full stack implementation"
        projectLink="http://tunelark.com"
        image={Tunelark}
        alternativeText="Tunelark"
      />
    </div>
  );
};

export default Projects;
