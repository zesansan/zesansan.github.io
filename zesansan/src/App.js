import React, { Component } from 'react';
import HeaderCard from './HeaderCard';
import SectionLabel from './SectionLabel';
import BackgroundCard from './BackgroundCard';
import SkillsList from './SkillsList';
import Projects from './Projects';
import Footer from './Footer';
import { languages, frameworks, libraries, databases } from './const';
import { Flex, Box } from 'grid-styled';
import './App.css';

const App = () => {
  return (
    <div>
      <HeaderCard />
      <Flex wrap>
        <Box width={[1, 1 / 4]}>
          <SectionLabel sectionName="BACKGROUND" />
        </Box>
        <Box>
          <BackgroundCard />
        </Box>
      </Flex>
      <Flex wrap>
        <Box width={[1, 1 / 4]}>
          <SectionLabel sectionName="SKILLS" />
        </Box>
        <Box>
          <Flex pl={3} wrap>
            <Box width={[1 / 3, 1 / 5]} mr={3}>
              <SkillsList listTitle="LANGUAGES" listItems={languages} />
            </Box>
            <Box width={[1 / 3, 1 / 5]} mr={3}>
              <SkillsList listTitle="FRAMEWORKS" listItems={frameworks} />
            </Box>
            <Box width={[1 / 3, 1 / 5]} mr={3}>
              <SkillsList listTitle="LIBRARIES" listItems={libraries} />
            </Box>
            <Box width={[1 / 3, 1 / 5]} mr={3}>
              <SkillsList listTitle="DATABASES" listItems={databases} />
            </Box>
          </Flex>
        </Box>
      </Flex>
      <Flex wrap>
        <Box width={[1, 1 / 4]}>
          <SectionLabel sectionName="PROJECTS" />
        </Box>
        <Box width={[1, 1 / 2]}>
          <Projects />
        </Box>
      </Flex>
      <Footer />
    </div>
  );
};

export default App;
