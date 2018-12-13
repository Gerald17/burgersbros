import React, { Component } from 'react';

import HomeSection from './components/home_section';
import IngredientsSection from './components/ingredients_section';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <HomeSection/>
        <IngredientsSection/>
      </React.Fragment>
    );
  }
}

export default App;
