import React from 'react';
import Intro from './components/Intro/Intro';
import RBNavbar from './components/RBNavbar/RBNavbar';
import Projects from './components/ProjectContainer/ProjectContainer';

const App = () => {

  return (
    <>
      <RBNavbar />
      <Intro />
      <Projects />
    </>
  );

}

export default App;
