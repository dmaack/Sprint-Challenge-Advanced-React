import React from 'react';
import axios from 'axios';
import './App.css';
import PlayerContainer from './components/PlayerContainer';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players: []
    }
  }

  componentDidMount() {
    console.log('cDM invoked in app.js.... calling setState')
    console.log(this)

    axios
    .get('http://localhost:5000/api/players')
    .then(res => {
      this.setState({
        players: res.data
      })
      console.log(res)
    })
  .catch(err => {
    console.log('data did not render', err)
  })
  }

  render() {
    return (
      <div className="App">
        <h1>Women's World Cup Player Roster</h1>
        <div>
          <PlayerContainer playerData={this.state.players} />
        </div>
      </div>
    );
  }
  }
  

export default App;
