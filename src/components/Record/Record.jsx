import { Link } from "react-router-dom"


const Record = ({record, handleRemoveRecord, handleAddRecord, profile}) => {

  
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
{/*       
      {profile.records.some(profileRecord => profileRecord.master_id === record.master_id) 
      ? */}
      <button onClick={() => handleRemoveRecord(profile.records._id)} profile={profile} className="btn">Remove</button>  
      
      <button onClick={() => handleAddRecord(record)} profile={profile}
        className="btn">Add to Collection</button>  
      {/* } */}

      </>
      </div>      
    </>
  );
}

export default Record;
