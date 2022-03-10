// import './Watchlist.css';
import React from 'react';


export default class Watchlist extends React.Component {
  state = {
    players: []
  }

  async componentDidMount() {
    try {
      let jwt = localStorage.getItem('token')
      let fetchPlayersResponse = await fetch('/api/players', {
        method: "GET",  
        headers: {"Content-Type": "application/json",'Authorization': 'Bearer ' + jwt}})
      console.log(fetchPlayersResponse)
    //   if (!fetchPlayersResponse.ok) throw new Error("Couldn't fetch players")
      let playerList = await fetchPlayersResponse.json(); // <------- convert fetch response into a js object
        console.log(playerList)
      // put into state
      this.setState({ players: playerList})
    } catch (err) {
      console.error('ERROR:', err) // <-- log if error
    }
  }

  render() {
    return (
      <div className="Watchlist">
          {this.state.players.length ? (
          this.state.players.map((p) => (
            <div className="WatchlistPlayers" onSubmit={this.deletePlayer}>
                <form>
                <p className="title">{this.state.player.id}</p>
                <p className="content">{this.state.player.first_name}</p>
                <button className="btn-sm" type="submit">Delete From Watchlist</button>
                </form>
            </div>
          ))
        ) : (
          <h1>No Players In Watchlist</h1>
        )}

        </div>
    )
  }
}