import { Link } from "react-router-dom"


const Profile = ({profile}) => { 
  
  return (
    <>
      <div className="profile">
        <Link
          to='/profile'
          state={{profile}}
          className='card-link'>
        </Link>              
      </div>      
    </>
  );
}

export default Profile;