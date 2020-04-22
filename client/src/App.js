import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Summary from "./summary";

class App extends Component {
  constructor() {
    super()
    this.state = {
      login: {},
      password: "",
      name: "",
      imgUrl: "",
      location: "",
      email: "",
      age: 0
    };
  }

  //calling the random user api and setting state properties as needed
  callToApi = async() => {
      let link = "https://randomuser.me/api/";
      let result = await fetch(link);
      let data = await result.json();
      let person = data.results[0];
      this.setState({login: person.login});
      this.setState({name: person.name.first + " " +  person.name.last});
      this.setState({imgUrl: person.picture.large});
      this.setState({location: person.location.city + ", " + person.location.state});
      this.setState({email: person.email});
      this.setState({age: person.dob.age});
      this.callToBackEnd();
  }

  //call to backend route that encrypts password
  callToBackEnd()  {
    axios.post('/api', this.state.login)
    .then(res => {
      this.setState({password: res.data})
    });

  }

  componentWillMount() {
    this.callToApi();
  }

  //render method of component
  render() {
    return (
      <div className="App">
        <h1 className="title">PERSON GEN</h1>
        <Summary 
          name={this.state.name} 
          imgUrl = {this.state.imgUrl}
          age={this.state.age} 
          location={this.state.location}
          email={this.state.email}
          password={this.state.password}
          ></Summary>
      </div>
    );
  }
}

export default App;
