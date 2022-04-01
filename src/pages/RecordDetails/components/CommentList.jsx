import Card from "./Card";

const CommentList = (props) => {
  const comments = props.album.comments
  const recordId = props.album._id
  return (
    <>
    <h4>Comment List</h4>
    {comments.map((c, idx)=> (
      <Card 
      comment={c} 
      recordId={recordId} 
      key={idx}
      handleUpdate={props.handleUpdate}
      />
    ))}
    </>
  )
}

export default CommentList