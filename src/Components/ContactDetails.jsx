import React from 'react';

const ContactDetails = ({contact}) => {
  return (
    <p>{`${contact.address} . ${contact.website} . Joined ${contact.joinedDate}`}</p>
  )
}

export default ContactDetails;
