import React from 'react';

import './App.css';
import axios from 'axios'
import User from './Components/User';
import Followers from './Components/Followers';

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      user: [],
      followers: []
    };
}
  componentDidMount() {
    axios
      .get(`https://api.github.com/users/pvaidehee`)
      .then(response => {
        console.log('here is the response', response)
        this.setState({ user: response.data})
      })
      .catch(error => {
        console.log('here is the ',error)
      })
      axios
      .get(`https://api.github.com/users/pvaidehee/followers`)
      .then(response => {
        console.log('here is the list of followers', response)
        this.setState({ followers: response.data})
      })
      .catch(error => {
        console.log('here is the ',error)
      })
  }



render() {
  return (
    <div className="App">
      <User user={this.state.user}/>
      <Followers followers={this.state.followers}/>

    </div>
  );
}
}

export default App;