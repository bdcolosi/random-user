import React, { Component } from "react";

class RandomUser extends Component {
    state = {
        user: "Fetching a user...."
    }

    async componentDidMount() {
      try {
        const response = await fetch('https://randomuser.me/api/?results=1')
        const data = await response.json();
        this.setState({ 
          user: data.value
        })
      } catch (error)
      {
        this.setState({
          user: error.message
        })
      }
    }
  render() {
      const {user} = this.state
    return (
        <p>{user}</p> 
    );
  }
}

export default RandomUser;