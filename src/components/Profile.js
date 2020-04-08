import React, { useState } from 'react'

const Profile = () => {
  
  // to have state inside fn comp, we can use useState() . 
  // this will take in data and return getter and setter in an array. 
  // We can do array destructuring to capture both.
  const [profile, setProfile] = useState({
    name: 'Arun',
    city: 'Chennai'
  });

  // old fashioned --- and unnecessary code block
  // const updateProfile = () => {
  //   setProfile({
  //     name: 'VJ',
  //     city: 'Chennai'
  //   });
  //   console.log(profile);
  // }

  return(
    <div>
      <h2>Profile | useState() Example </h2>
      <p>{profile.name} from {profile.city}</p>
      <button type='button' onClick={() => {
        setProfile({
          name: 'VJ',
          city: 'Chennai'
        });
      }}>Update Profile</button>
    </div>
    
  )
}

export default Profile;