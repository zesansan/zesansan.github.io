import React, { Component } from 'react';
import HeaderCard from './HeaderCard';
import SectionLabel from './SectionLabel';
import BackgroundCard from './BackgroundCard';
import AList from './AList';
import { languages, frameworks, libraries, databases } from './const';
import { Flex, Box } from 'grid-styled';
import './App.css';

const App = () => {
  return (
    <div>
      <Flex>
        <HeaderCard />
      </Flex>
      <Flex>
        <Box width={1 / 4}>
          <SectionLabel sectionName="BACKGROUND" />
        </Box>
        <Box>
          <BackgroundCard />
        </Box>
      </Flex>
      <Flex wrap>
        <Box width={1 / 4}>
          <SectionLabel sectionName="SKILLS" />
        </Box>
        <Flex pl={3} wrap>
          <Box width={[1 / 3, 1 / 5]} mr={3}>
            <AList listTitle="LANGUAGES" listItems={languages} />
          </Box>
          <Box width={[1 / 3, 1 / 5]} mr={3}>
            <AList listTitle="FRAMEWORKS" listItems={frameworks} />
          </Box>
          <Box width={[1 / 3, 1 / 5]} mr={3}>
            <AList listTitle="LIBRARIES" listItems={libraries} />
          </Box>
          <Box width={[1 / 3, 1 / 5]} mr={3}>
            <AList listTitle="DATABASES" listItems={databases} />
          </Box>
        </Flex>
      </Flex>
      <Flex>
        <Box width={1 / 4}>
          <SectionLabel sectionName="EXPERIENCE" />
        </Box>
      </Flex>
      <Flex>
        <Box width={1 / 4}>
          <SectionLabel sectionName="PROJECTS" />
        </Box>
      </Flex>
    </div>
  );
};

export default App;
