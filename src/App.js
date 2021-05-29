import React, { Component } from 'react';
import './App.css';
import Menu from './Components/Menu';
import Information from './Information/Information';
import Visualization from './Visualization/Visualization';
import Comentary from './Comentary/Comentary';
import Base from './Base/Base';

import { 
  Row,
  Col,
  Icon,
  Button
} from 'react-materialize';
class App extends Component {
  render() {
    return (
      <div>
        <Row>
        <Menu />

          <Col m={10} className="content">
            <Information/>
            <Visualization/>
            <Comentary/>

          </Col>
          <Col m={2} >
            <Base />
            
          </Col>
        </Row>
      </div>

    );
  }
}

export default App;
