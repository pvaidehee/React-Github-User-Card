import React from 'react';

const User = (props) => {
    return (
      <section>
        <div>
          <img src={props.userData.avatar_url} alt={props.userData.name} />
          <h1>{props.userData.name}</h1>
          <div>
            <i>{props.userData.login}</i>
          </div>
          <div>
            <b>Location: </b>
            {props.userData.location}
          </div>
          <div>
            <b>Followers: </b>
            {props.userData.followers}
          </div>
          <div>
            <b>Following: </b>
            {props.userData.following}
          </div>
          <div>
            <b>Bio: </b>
            {props.userData.bio}
          </div>
          <a href={props.userData.html_url}>
            <button>View Profile</button>
          </a>
        </div>
      </section>
    );
  };
  

export default User;