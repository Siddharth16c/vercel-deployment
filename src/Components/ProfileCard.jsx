import React from 'react';
import ContactDetails from './ContactDetails';
import Description from './Description';
import ProfileTop from './ProfileTop';

const ProfileCard = ({title,description,contact,cover,profilePic}) => {
  return (
    <div className="card">
        <div className="card-image">
                <img alt='cover' src={cover}/>
        </div>
        <div className="card-info" >
            <ProfileTop profilePic={profilePic}/>
            <h3>{title}</h3>
            <div className='description'>
                <Description description={description}/>
            </div>
            <div>
                <ContactDetails contact={contact}/>
            </div>
        </div>
    </div>
  )
}
export default ProfileCard