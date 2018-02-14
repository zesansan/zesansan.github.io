import React, { Component } from 'react';
import HeaderCard from './HeaderCard';
import SectionLabel from './SectionLabel';
import BackgroundCard from './BackgroundCard';
import AList from './AList';
import { languages, frameworks, libraries, databases } from './const';
import Grid from 'material-ui/Grid';
import './App.css';

class App extends Component {
  render() {
    return (
      <Grid container spacing={20}>
        <Grid item xs>
          <Grid container spacing={24}>
            <Grid item xs>
              <HeaderCard />
            </Grid>
          </Grid>
          <Grid container spacing={24}>
            <Grid item xs>
              <SectionLabel sectionName="BACKGROUND" />
            </Grid>
            <Grid item xs>
              <BackgroundCard />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item>
              <SectionLabel sectionName="SKILLS" />
            </Grid>
            <Grid item>
              <Grid container>
                <AList listTitle="LANGUAGES" listItems={languages} />
                <AList listTitle="FRAMEWORKS" listItems={frameworks} />
                <AList listTitle="LIBRARIES" listItems={libraries} />
                <AList listTitle="DATABASES" listItems={databases} />
              </Grid>
            </Grid>
          </Grid>
          <SectionLabel sectionName="EXPERIENCE" />
          <SectionLabel sectionName="PROJECTS" />
        </Grid>
      </Grid>
    );
  }
}

export default App;
