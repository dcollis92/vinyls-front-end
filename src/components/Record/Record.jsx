import { Link } from "react-router-dom"

const Record = ({record}) => {
  return (
    <>
      <Link
        to='/record'
        state={{record}}
        className='card-link'
      >
        <div className="record">
          <img src={record.cover_image} />
          <p>{record.title}</p>
        </div>
      </Link>
    </>
  );
}

export default Record;