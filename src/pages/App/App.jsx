import { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import AuthPage from '../AuthPage/AuthPage';
import AddPlayerPage from '../AddPlayerPage/AddPlayerPage'

export default class App extends Component {
  state = {
    user: null,
    players: []
  }

  setUserInState = (incomingUserData) => {
    this.setState({ user: incomingUserData})
  }

  getPlayers = async () => {
    await fetch("/api").then((res) => res.json()).then(data => this.setState({players: data}))
  }
  componentDidMount() {
    this.getPlayers()
  }

  render() {
    return (
      <div>
        <main className="App">
          
        { this.state.user ? 
          <Switch>
            <Route path='/players/add' render={(props) => (
              <AddPlayerPage {...props}/>
            )}/>
            {/* <Route path='/orders' render={(props) => (
              <OrderHistoryPage {...props}/>
            )}/> */}
            <Redirect to="/orders" />
          </Switch>
          :
          <AuthPage setUserInState={this.setUserInState}/>
        }
          App
        </main>
      </div>
    )
  }
}
