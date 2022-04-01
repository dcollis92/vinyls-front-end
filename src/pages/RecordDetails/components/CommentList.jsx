const CommentList = (props) => {
  console.log(props.album.comments);
  const comments = props.album.comments
  return (
    <>
    <h4>Comment List</h4>
    {comments.map(c => (
      <div key={c._id}>
        <p>{c.commentText}</p>
      </div>
    ))}
    </>
  )
}

export default CommentList