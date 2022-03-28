import { Link } from 'react-router-dom'

const RecordCover = (props) => {
  return (
    <main>
      <Link to={`/record/${props.record.cover_image}`}>
        {props.record.title}        
      </Link><br />
    </main>
  );
}

export default RecordCover;