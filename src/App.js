import React from 'react';
import {Container} from 'react-bootstrap';
import Nav from './components/nav';
import Visualizer from './components/visualizer';

import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Container>
        <Nav></Nav>
        <Visualizer></Visualizer>
      </Container>
    </div>
  );
}

export default App;
