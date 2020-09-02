import React from 'react';
import './App.css';
import axios from 'axios'
import User from './Components/User';
import Followers from './Components/Followers';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: "pvaidehee",
      userData: [],
      followersData: [],
      search: "",
      typedString: "",
    };
  }

  getUserInfo = () => {
    axios
      .get(
        `https://api.github.com/users/${this.state.user}`
      )
      .then((res) => {
        console.log(res);
        this.setState({ userData: res.data });
      })
      .catch((error) => console.log("Error", error));
  };

  getFollowersInfo = () => {
    axios
      .get(
        `https://api.github.com/users/${this.state.user}/followers`
      )
      .then((res) => {
        this.setState({ followersData: res.data });
        console.log(res.data);
      })
      .catch((error) => console.log("Error", error));
  };

  componentDidMount() {
    this.getUserInfo();
    this.getFollowersInfo();
  }


  render() {
    return (
      <div className= 'formapp'>
        <header className= 'headapp'>React GitHub User Card</header>

        <div className = 'userapp'>
          <User
            userData={this.state.userData}
            submitHandler={this.submitHandler}
            typedString={this.typedString}
            searchHandler={this.searchHandler}
          />
        </div>

        <div className='followapp'>

        <Followers
          followersData={this.state.followersData}
          getUserInfo={this.getUserInfo}
          
        />
      </div>
      </div>
    );
  }
}

export default App;