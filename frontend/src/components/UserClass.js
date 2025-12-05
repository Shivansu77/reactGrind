import React from 'react';

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count : 0,
            count2 : 1
        }
    }
  render() {
    return (
      <div className="user-card">
        <h1>Name : {this.props.name}</h1>
        <h3>Location : Jalandhar</h3>
        <h4>Contact : @Shark77su</h4>
      </div>
    );
  }
}

export default UserClass;
