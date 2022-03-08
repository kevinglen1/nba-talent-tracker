import { Component } from 'react';
import SelectPlayer from '../../components/SelectPlayer/SelectPlayer';
import Watchlist from '../../components/Watchlist/Watchlist';

import './App.css';

export default class App extends Component {
  state = {
    players: []
  }

  getPlayers = async () => {
    await fetch("/api").then((res) => res.json()).then(data => this.setState({players: data}))
  }
  componentDidMount() {
    this.getPlayers()
  }

  render() {
    return (
      <main className="App">
        {this.state.players.length ? 
          this.state.players.map(p => (
            <Watchlist
              player={p}
              getPlayers={this.getPlayers}
            />
          ))
            :
          <h1>No Players</h1>
        }
        <SelectPlayer
          getPlayers={this.getPlayers}
        />
        App
      </main>
    )
  }
}
