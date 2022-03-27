import { Link } from 'react-router-dom'

const RecordCover = (props) => {
  return (
    <main>
      <Link to={`/record/${props.record.index}`}>
        {props.record.name}
      </Link><br />
    </main>
  );
}
 
export default RecordCover;