import { Component } from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import AuthPage from "../AuthPage/AuthPage";
import AddPlayerPage from "../AddPlayerPage/AddPlayerPage";
import axios from "axios";

export default class App extends Component {
  state = {
    user: null,
    players: [],
    watchlist: [],
  };

  setUserInState = (incomingUserData) => {
    this.setState({ user: incomingUserData });
  };

  getPlayers = async () => {
    await fetch("/api")
      .then((res) => res.json())
      .then((data) => this.setState({ players: data }));
  };
  log = () => console.log(this.state);

  // addPlayerToWatchlist = () => {
  //   let playerId =
  //   this.setState({watchlist: playerId})
  // }
  async componentDidMount() {
    this.getPlayers();
    let token = localStorage.getItem("token");
    if (token) {
      const payload = JSON.parse(atob(token.split(".")[1])); // decode token
      if (payload.exp < Date.now() / 1000) {
        // Check if our token is expired, and remove if it is (standard/boilerplate)
        localStorage.removeItem("token");
        token = null;
      } else {
        // token not expired! our user is still 'logged in'. Put them into state.
        let userDoc = payload.user; // grab user details from token
        this.setState({ user: userDoc });
      }
    }
    const url = "https://www.balldontlie.io/api/v1/players";
    let result = null;
    try {
      result = await axios(url, {
        headers: {
          Accept: "application/json",
        },
      });
      console.log(result.data.data[0].first_name)
    } catch (e) {
      console.log(e);
    }
    this.setState({ players: result.data.data });
  }

  render() {
    return (
      <div>
        <main className="App">
          <h1>NBA Talent Tracker</h1>
          {this.state.user ? (
            <Switch>
              <Route
                path="/players/add"
                render={(props) => (
                  <AddPlayerPage
                    players={this.state.players}
                    setUserInState={this.setUserInState}
                    user={this.state.user}
                  />
                )}
              />
              <Redirect to="/players/add" />
            </Switch>
          ) : (
            <AuthPage setUserInState={this.setUserInState} />
          )}
          
        </main>
      </div>
    );
  }
}
