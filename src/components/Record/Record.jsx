import { Link } from "react-router-dom"


const Record = ({record, handleAddRecord, profile}) => {
 
  
  return (
    <>
      <div className="record">
      <Link
        to='/record'
        state={{record}}
        className='card-link'>
        <img src={record.cover_image} alt="" />
      </Link>            
      <>         
      <button onClick={() => handleAddRecord(record)} profile={profile}
        className="btn">Add to Collection</button>  
      </>
      </div>      
    </>
  );
}

export default Record;
