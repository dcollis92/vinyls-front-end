import { Link } from "react-router-dom";

const Artist = ({ record }) => {
  return (
    <>
      <div className="artist">
        <Link to="/artist" state={{ record }} className="card-link">
          <img src={record.cover_image} alt="" />
        </Link>
      </div>
    </>
  );
};

export default Artist;
