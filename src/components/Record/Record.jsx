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
      <button onClick={() => handleAddRecord(record)} profile={profile}
        className="btn">Add to Collection</button>
      {/* {profile.records.some(profileRecord => profileRecord.master_id === record.master_id) 
      ?
        <button onClick={() => handleRemoveRecord(record.master_id)} profile={profile} className="btn">Remove</button>
      :
        
      }   */}
      </>
      </div>      
    </>
  );
}

export default Record;
