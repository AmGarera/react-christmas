import React, {
  Component
}
from 'react';
// logo from './logo.svg';
import './App.css';
import Countdown from 'react-count-down';
import {
  Button,
  Icon,
  Row,
  Col,
  CardPanel
}
from 'react-materialize';
class App extends Component {
  render() {
    let OPTIONS = {
      endDate: '12/25/2016 12:00 AM',
      prefix: 'until Christmas!'
    }
    return (
      <div id="snow" className="App">
        <div className="App-header">
          <img src="http://www.misskatecuttables.com/uploads/shopping_cart/8683/large_christmas-tree2.png" className="App-logo" alt="logo" />
          <h4>Christmas Countdown</h4>
        </div>
        <Row>
    <Col s={6} m={12}>
        <CardPanel className="teal lighten-4 black-text center-align z-depth-4">
          <Countdown options={OPTIONS}/>
        </CardPanel>
    </Col>
</Row>
        <Button node='a' waves='light' href="https://www.github.com/amgarera"><Icon right>important devices</Icon>Visit me on Github</Button>
      </div>
    );
  }
}

export default App;
