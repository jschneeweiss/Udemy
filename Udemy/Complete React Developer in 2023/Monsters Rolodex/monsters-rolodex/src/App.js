import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: {firstname: 'Jennifer', lastname: 'Schneeweiss'},
      company: 'MTU'
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <p>Hi {this.state.name.firstname} {this.state.name.lastname}. I work at {this.state.company}</p>
          </p>
          <button
            onClick={() => {
              this.setState({ name: {firstname: 'Michelle', lastname:'Richter'} });
            }}>
            Change Name
          </button>
        </header>
      </div>
    );
  }
}

export default App;
