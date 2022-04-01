import { useState } from 'react';


const Card = (props) => {
const [edit, setEdit] = useState(false)
const [comment, setComment] = useState({
  commentText: '',
})

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
    <button onClick={() => setEdit(!edit)}>edit</button>
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
        </div>
      }
    </>
  );
}

export default Card;