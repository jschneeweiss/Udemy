import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      filterMonsters: []
    };
    console.log('constructor');
  }

  componentDidMount() {
    console.log('componentDidMount');
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users =>
        this.setState(
          () => {
            return { 
              monsters: users,
              filterMonsters: users
             }
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }

  filterName = (event) => {    
    this.setState({     
      filterMonsters: this.state.monsters.filter((monster) => monster.name.toLowerCase().indexOf(event.target.value) > -1)
    })
  }

  render() {
    console.log('render');
    return (
      <div className="App">
        <input
          className='search-box'
          type='search'
          placeholder='search monsters'
          onChange={this.filterName}
        />
        {
          this.state.filterMonsters.map((monster) => {
            return (
              <div key={monster.id}>
                <h1>{monster.name}</h1>
              </div>
            );
          })
        }
      </div>
    );
  }
}

export default App;
