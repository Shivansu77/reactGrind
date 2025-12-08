import React, { Component } from 'react';

class UserClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: 'Dummy Name',
        location: 'Dummy Location',
        avatar_url: 'https://avatars.githubusercontent.com/u/9919?v=4'
      },
      count: 21
    };
  }

  async componentDidMount() {
    try {
      const data = await fetch('https://api.github.com/users/shivansu77');
      const json = await data.json();

      if (data.ok) {
        this.setState({
          userInfo: json
        });
      }
    } catch (error) {
      console.log('GitHub API rate limit exceeded, using default data');
    }
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    const { count } = this.state;

    return (
      <div
        style={{
          width: "380px",
          margin: "40px auto",
          padding: "24px",
          borderRadius: "20px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
          textAlign: "center",
          backgroundColor: "#fff",
          fontFamily: "Arial, sans-serif"
        }}
      >
        <img
          src={avatar_url}
          alt="User Avatar"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/160/ffc0cb/666?text=User';
          }}
          style={{
            width: "160px",
            height: "160px",
            borderRadius: "50%",
            border: "5px solid #ffe4ec",
            marginBottom: "16px",
            objectFit: "cover",
          }}
        />

        <h2 style={{
          marginBottom: "6px",
          fontSize: "26px",
          fontWeight: "600",
          color: "#333"
        }}>
          {name}
        </h2>

        <h3 style={{
          margin: "6px 0",
          color: "#666",
          fontWeight: "400",
          fontSize: "18px"
        }}>
          📍 {location}
        </h3>

        <h4 style={{
          color: "#999",
          fontWeight: "400",
          marginBottom: "16px",
          fontSize: "16px"
        }}>
          Contact: @Shivansu77
        </h4>

        <h4 style={{
          fontWeight: "500",
          fontSize: "20px",
          marginBottom: "16px",
          color: "#d6336c"
        }}>
          Likes ❤️ : {count}
        </h4>

        <button
          onClick={() => this.setState({ count: count + 1 })}
          style={{
            padding: "14px 32px",
            fontSize: "17px",
            borderRadius: "12px",
            border: "none",
            cursor: "pointer",
            backgroundColor: "#ffc0cb", // Light pink
            color: "#fff",
            transition: "0.3s",
            fontWeight: "600",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            justifyContent: "center",
            margin: "0 auto"
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = "#ffb6c1"} // Slightly darker pink on hover
          onMouseOut={(e) => e.target.style.backgroundColor = "#e24f68ff"}
        >
          ❤️ Like
        </button>
      </div>
    );
  }
}

export default UserClass;
