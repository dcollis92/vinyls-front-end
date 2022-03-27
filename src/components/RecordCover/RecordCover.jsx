import { Link } from 'react-router-dom'

const RecordCover = (props) => {
  return (
    <>
      <Link to={`/record/${props.record.index}`}>
        {props.record.name}
      </Link><br />
    </>
  );
}
 
export default RecordCover;