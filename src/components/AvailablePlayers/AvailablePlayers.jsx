import { Component } from "react";
import "./AvailablePlayers.css";

export default class AvailablePlayers extends Component {
  state = {
    players: [],
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      let jwt = localStorage.getItem("token");

      const fetchResponse = await fetch("/api/players", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + jwt,
        },
        body: JSON.stringify({
          id: this.props.player.id,
          first_name: this.props.player.first_name,
        }),
      });
      console.log(fetchResponse);
      let serverResponse = await fetchResponse.json(); // <-- decode fetch response
      console.log("Success:", serverResponse);
    } catch (err) {
      console.log("Add player error", err);
      this.setState({ error: "Add Player Failed - Try Again" });
    }
  };
  render() {
    return (
      <div className="availablePlayers">
        <table>
          <thead>
            <tr>
              <th>Player ID</th>
              <th>First Name</th>
              <th>Add To Watchlist</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="playerId">{this.props.player.id}</td>
              <td className="firstName">{this.props.player.first_name}</td>
              <td>
                <button className="btn-sm" onClick={this.handleSubmit}>
                  Add to Watchlist
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
