import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavTabs from './components/NavTabs/NavTabs';
import Home from './components/pages/HomeContainer/Home';
import About from './components/pages/AboutContainer/About';
import Projects from './components/pages/ProjectContainer/Projects';
import Contact from './components/pages/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <BrowserRouter>
        <NavTabs />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/projects' component={Projects} />
          <Route exact path='/contact' component={Contact} />
          {/* <Route component={NoMatch} /> */}
        </Switch>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
