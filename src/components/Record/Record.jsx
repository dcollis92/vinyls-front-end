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
          <p>{record.title}</p>
        </div>
      </Link>
    </>
  );
}

export default Record;