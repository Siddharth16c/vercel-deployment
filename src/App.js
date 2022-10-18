import './App.css';
import ProfileCard from './Components/ProfileCard';

function App() {
  const user = {
    title:'Space Ship',
    coverImg:require('./assets/images/cover-image.jpg'),
    profilePic:require('./assets/images/profile-pic.png'),
    description:'Translating Ideas into reality - #REACT, #JAVASCRIPT, #CSS, and #UXDesign',
    contactInfo:{
      address:'North America and Europe',
      website:'hanservices.com',
      joinedDate:'March 2009'
    }
  }

  return (
    <div className="App">
      <ProfileCard title={user.title} 
                   cover={user.coverImg}
                   description={user.description} 
                   contact={user.contactInfo}
                   profilePic={user.profilePic}
      />
    </div>
  );
}

export default App;
