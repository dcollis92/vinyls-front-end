import { Link } from "react-router-dom"

const Record = ({record, handleRemoveRecord, handleAddRecord, profile}) => {
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
      <button onClick={() => handleAddRecord(record)}
      className="btn">Add to Collection</button>
        
      {/* {profile.records.some(profileRecord => profileRecord.title === record.title) ? 
      <button onClick={() => handleRemoveRecord(record.title)} className="btn">Remove</button>
      :
             */}
      </div>      
    </>
  );
}

export default Record;
