import { useState } from 'react';
import * as recordService from '../../../services/recordService'


const Card = (props) => {
const [edit, setEdit] = useState(false)
const [comment, setComment] = useState({
  commentText: props.comment.commentText,
})

console.log(props);



const handleEditComment = () => {
  recordService.editComment(props.recordId, props.comment._id, comment).then(updatedRecord => {
    console.log(updatedRecord);
    props.handleUpdate(updatedRecord)
    setComment({commentText: "" })
    setEdit(!edit)
  })
}

const handleChange = e => {
  // updateMessage('')
  setComment({
    ...comment,
    [e.target.name]: e.target.value,
  })
}
  console.log('this is card', comment);
  console.log(props);
  return ( 
    <>
    <button 
    onClick={() => setEdit(!edit)}
    
    >edit</button>
      {!edit ?
        <div >
          <p>{props.comment.commentText}</p>
        </div>
        :
        <div>
          <input 
            type="text"
            name="commentText" 
            value={comment.commentText} 
            onChange={(e) => handleChange(e)} 
          />
          <button 
          onClick={handleEditComment}
          >
            Submit
          </button>
        </div>
      }
    </>
  );
}

export default Card;