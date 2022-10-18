import React from 'react';

const Description = ({description}) => {
  return (
    <p dangerouslySetInnerHTML={{__html:description.replace(/#(\S*)/g,"<a href='https://twitter.com/#!/search/$1'>#$1</a>")}}/>
  )
}

export default Description
