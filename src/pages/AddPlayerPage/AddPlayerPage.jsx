import { Component } from "react";
import SelectPlayer from "../../components/SelectPlayer/SelectPlayer";
import Watchlist from "../../components/Watchlist/Watchlist";
import UserLogOut from '../../components/UserLogOut/UserLogOut';
// import "./App.css";

export default class App extends Component {
  state = {
    user: null,
    players: [],
  };

  setUserInState = (incomingUserData) => {
    this.setState({ user: incomingUserData });
  };

  getPlayers = async () => {
    await fetch("/api")
      .then((res) => res.json())
      .then((data) => this.setState({ players: data }));
  };
  componentDidMount() {
    this.getPlayers();
  }

  render() {
    return (
      <main className="AddPlayerPage">
          <nav className="nav">
            <UserLogOut />
            </nav>
        {this.props.players.length ? (
          this.props.players.map((p) => (
            <Watchlist player={p} getPlayers={this.getPlayers} />
          ))
        ) : (
          <h1>No Players</h1>
        )}
        <SelectPlayer getPlayers={this.getPlayers} />
        add player page
      </main>
    );
  }
}