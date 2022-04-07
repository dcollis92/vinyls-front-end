import { useState, useEffect } from 'react';
import * as recordService from '../../../services/recordService'
import * as profileService from '../../../services/profileService'
// import { useLocation } from 'react-router-dom'


const Card = (props) => {
const [edit, setEdit] = useState(false)
const [currProfile, setCurrProfile] = useState(null)
const [comment, setComment] = useState({
  commentText: props.comment.commentText,
})

// const location = useLocation()
// const profile = location.state.profile

// should this be moved?
const handleEditComment = () => {
  recordService.editComment(props.recordId, props.comment._id, comment).then(updatedRecord => {
    props.handleUpdate(updatedRecord)
    setComment({commentText: "" })
    setEdit(!edit)
  })
}

const handleChange = e => {  
  setComment({
    ...comment,
    [e.target.name]: e.target.value,
  })
}

console.log('comment info', props.comment)
console.log('profile', props.user.profile)
// console.log('profile', currProfile._id)

useEffect(()=> {
  profileService.getProfile(props.profile._id)
  .then(profile => setCurrProfile(profile))
}, [])

  return ( 
    <>
    { props.user.profile === props.comment.commenter ?
      <>
        <button 
        onClick={() => setEdit(!edit)}
        >edit
        </button>
      </>
      :
      <>
      </>
    }
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
            onChange={(e) => handleChange(e)}/>
          <button 
            onClick={handleEditComment}>
            Submit
          </button>
        </div>
      }
    </>
  );
}

export default Card;