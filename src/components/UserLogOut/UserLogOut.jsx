import React from 'react';
import './UserLogOut.css'

class UserLogOut extends React.Component {

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: ''
    });
  };

  logout = async (evt) => {
    evt.preventDefault();
    try {

      localStorage.removeItem('token');  // delete from local storage
      this.props.setUserInState(null)

    } catch (err) {
      console.log("Logout error", err)
      this.setState({ error: 'Logout Failed - Try Again' });
    }
  }
  render() {
  return (
      <div className='UserLogOut' onSubmit={this.logout}>
        <form>
          
        <div>Name: {this.props.user.name}</div>
        <div>Email: {this.props.user.email}</div>
        <button className="btn-sm" type="submit">Logout</button>
        </form>
      </div>
  );
  }
}

export default UserLogOut;