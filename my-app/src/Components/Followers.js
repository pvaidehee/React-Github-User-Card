import React from 'react';

function Followers(props){
    console.log('here is the props', props)
    return(
<section>
      <h2>GitHub Followers</h2>
      <div>
        {props.followersData.map((follower) => (
          <div key={follower.id}>
            <div>
              <img src={follower.avatar_url} alt={follower.id} />
            </div>
            <h1>{follower.name}</h1>
          <div>
            <i>{follower.login}</i>
          </div>
          <div>
            <b>Location: </b>
            {follower.location}
          </div>
          <div>
            <b>Followers: </b>
            <i>{follower.followers}</i>
          </div>
          <div>
            <b>Following: </b>
            {follower.following}
          </div>
          <div>
            <b>Bio: </b>
            {follower.bio}
          </div>
            <a href={follower.html_url}>
              <button>View Profile</button>
            </a>
          </div>
        ))}
      </div>
    </section>
    )
}

export default Followers;