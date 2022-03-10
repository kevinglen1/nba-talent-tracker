import { Component } from "react";
import SelectPlayer from "../../components/SelectPlayer/SelectPlayer";
import AvailablePlayers from "../../components/AvailablePlayers/AvailablePlayers";
import UserLogOut from '../../components/UserLogOut/UserLogOut';
import Watchlist from "../../components/Watchlist/Watchlist";
// import "./App.css";

export default class AddPlayerPage extends Component {



  render() {
    return (
      <main className="AddPlayerPage">
          <nav className="nav">
            <UserLogOut setUserInState={this.props.setUserInState} user={this.props.user}/>
            </nav>
          <Watchlist />
        {this.props.players.length ? (
          this.props.players.map((p) => (
            <AvailablePlayers player={p} getPlayers={this.props.getPlayers} />
          ))
        ) : (
          <h1>No Players</h1>
        )}
      </main>
    );
  }
}
