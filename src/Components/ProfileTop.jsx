import React from 'react';
import { useState } from 'react';

const ProfileTop = ({profilePic}) => {
  const [follow, setFollow] = useState(false)  

  return (
    <div className='profile-top'>
      <img alt='profile' src={profilePic}/>
        {!follow ? <button className='follow' onClick={() => setFollow(prev => !prev)}>Follow</button> : 
                   <button className='follow' onClick={() => setFollow(prev => !prev)}>Unfollow</button>
        }
    </div>
  )
}

export default ProfileTop