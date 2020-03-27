import React, { Component } from "react";

class RandomUser extends Component {
    state = {
        picture: "FACE",
        info: "fetching data",
        location: "Atlanta, GA",
        email: "b@gmail.com",
        dob: "04/27/1993"
    }

    async componentDidMount() {
      try {
        const response = await fetch('https://randomuser.me/api/?results=1')
        const data = await response.json();
            console.log(data);
        this.setState({ 
            picture: data.results[0].picture.large,
            info: `New User: ${data.results[0].name.first}`,
            location: data.results[0].location.street.name + ", " + data.results[0].location.city + ", " + data.results[0].location.country,
            email: data.results[0].email,
            dob: data.results[0].dob.date + ", " + data.results[0].dob.age
        })
      } catch (error)
      {
        this.setState({
          info: error.message
        })
      }
    }
  render() {
      const {picture, info, location, email, dob} = this.state
    return (
        <div>
        <img src = {picture}></img><br/>
        {info}<br/>
        {location}<br/>
        {email}<br/>
        {dob}<br/>
        </div>
    );
  }
}

export default RandomUser;