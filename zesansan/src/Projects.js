import React from 'react';
import Hover from './Hover';
import TheRelish from './assets/therelish.png';
import Tunelark from './assets/tunelark.png';

const Projects = props => {
  return (
    <div>
      <Hover
        title="The Relish"
        info="A sports video network for female fans aimed at revolutionizing the social fan experience.
"
        projectLink="http://ambassadors.therelish.com"
        image={TheRelish}
        alternativeText="The Relish"
      />
      <Hover
        title="Tunelark"
        info="Music education platform that develops games to teach music theory, ear training and sight-reading.
"
        projectLink="http://tunelark.com"
        image={Tunelark}
        alternativeText="Tunelark"
      />
    </div>
  );
};

export default Projects;
