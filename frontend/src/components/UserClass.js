import React from 'react';

class UserClass extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, location } = this.props;

    return (
      <div className="user-card">
        <h1>Name : {name}</h1>
        <h3>Location : {location}</h3>
        <h4>Contact : @Shark77su</h4>
      </div>
    );
  }
}

export default UserClass;
