import React from 'react';

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 1
    };
    console.log('Constructor called');
  }

  componentDidMount() {
    console.log('Component did mount called');
  }

  render() {
    const { name, location } = this.props;
    const { count } = this.state;
    console.log('Render called');
    return (
      <div className="user-card">
        <h1>Name : {name}</h1>
        <h3>Location : {location}</h3>
        <h4>Contact : @Shark77su</h4>   
        <h4>Count : {count}</h4>

        <button 
          onClick={() => this.setState({ count: count + 1 })}
        >
          Like
        </button>
      </div>
    );
  }
}

export default UserClass;
