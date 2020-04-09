import React, { useState } from 'react'

const Profile = () => {
  
  // having state in fn comp 
  const [ myProfile, setMyProfile ] = useState({
    name: 'Arun',
    city: 'Chennai'
  }); // will return array with getter and setter

  console.log(myProfile);

  return(
    <div>
      <h2>Profile | useState() Example </h2>
      <p>{myProfile.name} from {myProfile.city} </p>
      <button type='button' onClick={ () => { 
        setMyProfile({
          name: 'VJ',
          city: 'Hyd'
        })
      } }>Update Profile</button>
    </div>
    
  )
}

export default Profile;