import { Link } from "react-router-dom"


const Profile = ({profile, randDogImgId}) => {


  return (
    <>
      <div className="profile">
        <Link
          to='/profile'
          state={{profile}}
          className='card-link'>
            <img className="card-img-top mx-auto" 
            src={`https://picsum.photos/id/${randDogImgId}/640/480`} 
            alt="A happy puppy"/>
        </Link>              
      </div>      
    </>
  );
}

export default Profile;