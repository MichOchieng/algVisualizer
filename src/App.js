import React from 'react';
import {Container} from 'react-bootstrap';
import Visualizer from './components/visualizer';

import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Container>
        <Visualizer></Visualizer>
      </Container>
    </div>
  );
}

export default App;
