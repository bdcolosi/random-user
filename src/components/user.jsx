import React, { Component } from "react";

class RandomUser extends Component {
    state = {
        name: "Brooke",
        gender: "female",
        email: "b@gmail.com",
        birthday: "April 27th, 1993",
        address: "Decatur, GA",
        phone: "(860) 462-0879",
        password:"password"
    }

    async componentDidMount() {
      try {
        const response = await fetch('https://randomuser.me/api/?results=1')
        const data = await response.json();
            console.log(data);
        this.setState({ 
          name: data.value,
          gender: data.value,
          email: data.value,
          birthday: data.value,
          address: data.value,
          phone: data.value,
          password: data.password
        })
      } catch (error)
      {
        this.setState({
          name: error.message
        })
      }
    }
  render() {
      const {name, gender, email,birthday,address,phone,password} = this.state
    return (
        <p>
        {name}<br/>
        {gender}<br/>
        {email}<br/>
        {birthday}<br/>
        {address}<br/>
        {phone}<br/>
        {password}<br/>
        </p> 
    );
  }
}

export default RandomUser;