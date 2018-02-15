import React, { Component } from 'react';
import HeaderCard from './HeaderCard';
import SectionLabel from './SectionLabel';
import BackgroundCard from './BackgroundCard';
import SkillsList from './SkillsList';
import Projects from './Projects';
import Footer from './Footer';
import { languages, frameworks, libraries, databases } from './const';
import { Flex, Box } from 'grid-styled';

const App = () => {
  return (
    <div>
      <HeaderCard />
      <Flex wrap>
        <Box width={[1, 1, 1 / 4, 1 / 4]}>
          <SectionLabel sectionName="BACKGROUND" />
        </Box>
        <Box width={[1, 1, 1 / 2, 1 / 2]}>
          <BackgroundCard />
        </Box>
      </Flex>
      <Flex wrap>
        <Box width={[1, 1, 1 / 5, 1 / 4]}>
          <SectionLabel sectionName="SKILLS" />
        </Box>
        <Box witdth={[1, 1, 1 / 2, 1 / 2]}>
          <Flex ml={[3, 3, 5, 3]} wrap>
            <Box width={[1 / 2, 1 / 7, 1 / 3, 1 / 7]} mr={[0, 5, 3, 5]}>
              <SkillsList listTitle="LANGUAGES" listItems={languages} />
            </Box>
            <Box width={[1 / 2, 1 / 7, 1 / 3, 1 / 7]} mr={[0, 5, 3, 5]}>
              <SkillsList listTitle="FRAMEWORKS" listItems={frameworks} />
            </Box>
            <Box width={[1 / 2, 1 / 7, 1 / 3, 1 / 7]} mr={[0, 5, 3, 5]}>
              <SkillsList listTitle="LIBRARIES" listItems={libraries} />
            </Box>
            <Box width={[1 / 2, 1 / 7, 1 / 3, 1 / 7]} mr={[0, 5, 3, 5]}>
              <SkillsList listTitle="DATABASES" listItems={databases} />
            </Box>
          </Flex>
        </Box>
      </Flex>
      <Flex wrap>
        <Box width={[1, 1, 1 / 4, 1 / 4]}>
          <SectionLabel sectionName="PROJECTS" />
        </Box>
        <Box width={[1, 1, 1 / 2, 1 / 2]} ml={3}>
          <Projects />
        </Box>
      </Flex>
      <Footer />
    </div>
  );
};

export default App;
