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
      </div>      
    </>
  );
}

export default Record;
