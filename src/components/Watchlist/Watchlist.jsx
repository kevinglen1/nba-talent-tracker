// import './Watchlist.css';
import React from "react";

export default class Watchlist extends React.Component {
  state = {
    players: [],
  };

  removeFromList = async (id) => {
    console.log("player id", this.id);
    console.log("player id", this.id);

    try {
      
      let jwt = localStorage.getItem("token");

      const fetchResponse = await fetch(`/api/players/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + jwt,
        },
        body: JSON.stringify({
          id: this.state.players.id,
          first_name: this.state.players.first_name,
        }),
      });
      console.log(fetchResponse);
      let serverResponse = await fetchResponse.json(); // <-- decode fetch response
      console.log("Success:", serverResponse); // <-- log server response

      //   const userDoc = JSON.parse(atob(token.split('.')[1])).user; // 5. Decode the token + put user document into state
      //   this.props.setUserInState(userDoc)
    } catch (err) {
      console.log("Remove player error", err);
      this.setState({ error: "Remove Player Failed - Try Again" });
    }
  };

  async componentDidMount() {
    try {
      
      let jwt = localStorage.getItem("token");
      // let fetchPlayersResponse = await fetch('/api/players', {
      //   method: "GET",
      //   headers: {"Content-Type": "application/json",'Authorization': 'Bearer ' + jwt}
      // })
      let fetchPlayersResponse = await fetch("/api/players", {
        method: "GET",
        headers: { Authorization: "Bearer " + jwt },
      });

      if (!fetchPlayersResponse.ok) throw new Error("Couldn't fetch orders");
      console.log("fetchPlayersResponse", fetchPlayersResponse);
      //   if (!fetchPlayersResponse.ok) throw new Error("Couldn't fetch players")
      let playerList = await fetchPlayersResponse.json(); // <------- convert fetch response into a js object
      console.log("playerlist", playerList);
      // put into state
      this.setState({ players: playerList });
    } catch (err) {
      console.error("ERROR:", err); // <-- log if error
    }
  }

  render() {
    return (
      <div className="Watchlist">
        <table>
          <thead>
            <tr>
              <th>Player ID</th>
              <th>First Name</th>
              <th>Delete From Watchlist</th>
            </tr>
          </thead>
          <tbody>
            {this.state.players.length ? (
              this.state.players.map((p) => (
                <tr>
                  <div
                    className="WatchlistPlayers"
                    onClick={() => this.removeFromList(p.id)}
                  >
                    <form>
                      <td className="title">{p.id}</td>
                      <td className="content">{p.first_name}</td>
                      <td>
                        <button className="btn-sm" type="submit">
                          Remove From Watchlist
                        </button>
                      </td>
                    </form>
                  </div>
                </tr>
              ))
            ) : (
              <h1>No Players In Watchlist</h1>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}
