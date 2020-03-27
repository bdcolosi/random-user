import React, { Component } from "react";
import {Card, CardImage, CardContent, Media, Image, MediaLeft, MediaContent, Title, Content, Subtitle} from 'bloomer';
import "bulma/css/bulma.css";


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
            info: data.results[0].name.first,
            location: data.results[0].location.street.name + ", " + data.results[0].location.city + ", " + data.results[0].location.country,
            email: data.results[0].email,
            dob: data.results[0].dob.age + " years old"
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
        
          <Card>
         <CardContent>
           <Media>
             <MediaLeft>
            <Image isSize = '48x48' src = {picture}></Image>
             </MediaLeft>
             <MediaContent>
               <Title isSize = {4}>{info}</Title>
               <Subtitle isSize={6}>{email}</Subtitle>
             </MediaContent>
           </Media>
           <Content>
             {location}<br/>
             {dob}<br/>
           </Content>
         </CardContent>
          </Card>
        
    );
  }
}

export default RandomUser;