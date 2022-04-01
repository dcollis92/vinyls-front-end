import Card from "./Card";

const CommentList = (props) => {
  console.log(props.album.comments);
  const comments = props.album.comments
  return (
    <>
    <h4>Comment List</h4>
    {comments.map(c => (
      <Card comment={c} key={c.id}/>
    ))}
    </>
  )
}

export default CommentList