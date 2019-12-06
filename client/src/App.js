import React from 'react';
import axios from 'axios';
import './App.css';
import Axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/players')
    .then(response => {
      console.log(response.data);
      this.setState({ players: response.data });
    })
    .catch(error => {
      console.log('I AM ERROR', error);
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Women's World Cup</h1>
        </header>
      </div>
    );
  }
}

export default App;