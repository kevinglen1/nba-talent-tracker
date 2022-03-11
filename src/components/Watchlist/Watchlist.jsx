import './Watchlist.css';
import React from "react";

export default class Watchlist extends React.Component {
  state = {
    players: [],
  };

  removeFromList = async (id) => {

    try {
      console.log('remove from list', this.state.players)
      
      let jwt = localStorage.getItem("token");

      const fetchResponse = await fetch(`/api/players/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + jwt,
        },
        body: JSON.stringify({
          id: id,
        }),
      });
      console.log(fetchResponse);
      let serverResponse = await fetchResponse.json(); // <-- decode fetch response
      console.log("Success:", serverResponse); // <-- log server response

      console.log('1st id',id)

      var filteredArray = this.state.players.filter(function(player) { return player.id !== id })
      console.log('2nd id',id)
      console.log(filteredArray)
      this.setState({players: filteredArray})

    } catch (err) {
      console.log("Remove player error", err);
      this.setState({ error: "Remove Player Failed - Try Again" });
    }
  };

  async componentDidMount() {
    try {
      
      let jwt = localStorage.getItem("token");

      let fetchPlayersResponse = await fetch("/api/players", {
        method: "GET",
        headers: { Authorization: "Bearer " + jwt },
      });

      if (!fetchPlayersResponse.ok) throw new Error("Couldn't fetch orders");
      //   if (!fetchPlayersResponse.ok) throw new Error("Couldn't fetch players")
      let playerList = await fetchPlayersResponse.json(); // <------- convert fetch response into a js object
   
      // put into state
      this.setState({ players: playerList });
    } catch (err) {
      console.error("ERROR:", err); // <-- log if error
    }
  }

  render() {
    return (
      <div className="Watchlist">
        <table className="fl-table">
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
                  
                    
                      <td className="title">{p.id}</td>
                      <td className="content">{p.first_name}</td>
                      <td>
                        <button className="btn-sm" onClick={() => this.removeFromList(p.id)}>
                          Remove From Watchlist
                        </button>
                      </td>
                    
                  
                </tr>
              ))
            ) : (
              <tr><td><h1>No Players In Watchlist</h1></td></tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}
