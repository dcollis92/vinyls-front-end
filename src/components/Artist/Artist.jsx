import { Link } from "react-router-dom"

const Artist = ({record}) => {

  
  return (
    <>
    
      <div className="record">
      <Link
        to='/record'
        state={{record}}
        className='card-link'
      >
        <img src={record.cover_image} alt="" />
      </Link>            
      <p>{record.title}</p>
      </div>      
    </>
  );
}

export default Artist;