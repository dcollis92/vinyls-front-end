import Card from "./Card";

const CommentList = (props) => {
  console.log(props.album.comments);
  const comments = props.album.comments
  const recordId = props.album._id
  return (
    <>
    <h4>Comment List</h4>
    {comments.map(c => (
      <Card 
      comment={c} 
      recordId={recordId} 
      key={c.id}
      handleUpdate={props.handleUpdate}
      />
    ))}
    </>
  )
}

export default CommentList