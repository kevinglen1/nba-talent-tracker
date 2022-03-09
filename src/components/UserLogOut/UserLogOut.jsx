import React from 'react';
import './UserLogOut.css'

class UserLogOut extends React.Component {
  render() {
  return (
      <div className='UserLogOut'>
        <div>Name: ??</div>
        {/* <div>Email: {this.state.email}</div> */}
        <button className="btn-sm">Logout</button>
      </div>
  );
  }
}

export default UserLogOut;