import { Component } from 'react';
import './AvailablePlayers.css';

export default class AvailablePlayers extends Component {
    
    handleSubmit = async (evt) => {

        
        evt.preventDefault();
        try {
            let jwt = localStorage.getItem('token')
          // 1. POST our new user info to the server
          const fetchResponse = await fetch('/api/players', {
            method: 'POST',
            headers: {"Content-Type": "application/json", 'Authorization': 'Bearer ' + jwt},
            body: JSON.stringify({id: this.props.player.id, first_name: this.props.player.first_name,})
          })
          console.log(fetchResponse)
          let serverResponse = await fetchResponse.json() // <-- decode fetch response
            console.log("Success:", serverResponse)   // <-- log server response
          
        //   const userDoc = JSON.parse(atob(token.split('.')[1])).user; // 5. Decode the token + put user document into state
        //   this.props.setUserInState(userDoc)
    
        } catch (err) {
          console.log("Add player error", err)
          this.setState({ error: 'Add Player Failed - Try Again' });
        }
      }
      render() {
    return(
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
          <div className="availablePlayers" onSubmit={this.handleSubmit}>
            <form>
              <td className="playerId">{this.props.player.id}</td>
              <td className="firstName">{this.props.player.first_name}</td>
              <td><button className="btn-sm" type="submit">Add to Watchlist</button></td>
            </form>
          </div>
          </tr>
          </tbody>
          </table>
        
    )
}
}