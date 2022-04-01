import './RecordDetails.scss';
import { useState } from 'react';
import { Button, Form, FloatingLabel } from 'react-bootstrap';
import { useLocation } from 'react-router-dom'
import Record from '../../components/Record/Record';
import Artist from '../../components/Artist/Artist';
import StarRating from '../../components/StarRating/StarRating';
import CommentList from './components/CommentList';


const RecordDetails = ({handleAddRecord, handleRemoveRecord, profile, handleAddComment, dbRecords}) => {
  const [comment, setComment] = useState({
    commentText: '',
  })

  const location = useLocation()
  console.log(location.state)
  const record = location.state.record
  
  const filteredAlbum = dbRecords.find(album =>
    album.master_id === record.master_id
    )

    console.log(filteredAlbum);

  
    const handleChange = e => {
      // updateMessage('')
      setComment({
        ...comment,
        [e.target.name]: e.target.value,
      })
    }
console.log(comment);
  return (
    <main className='record-details'>
      <div className='album-display row'>
        <h1 className='album-header text-center'>
          Album Details
        </h1>
        <div className='cover-display col-md text-center'>
          <div className='single-record'>
            <div className='record-img'>
              <Record key={record.title} record={record} handleAddRecord={handleAddRecord} handleRemoveRecord={handleRemoveRecord} profile={profile} />
            </div>
          </div>
        </div>
        <div className='details-display col-md'>
          <div className='categories'>
            <div className='artist'><h4>Artist</h4></div>
            <div className='album'><h4>Album</h4></div>
            <div className='year'><h4>Year</h4></div>
            <div className='label'><h4>Label</h4></div>
            {/* <div className='tracklist'> 
              <h4>Tracklist</h4>
            </div> */}
          </div>
          <div className='release-info'>
            <div className='artist'>
              <h4>Black Sabbath</h4>
            </div>
            <div className='album'>
              <h4>Album</h4>
            </div>
            <div className='year'>
              <h4>1970</h4>
            </div>
            <div className='label'>
              <h4>Warner Bros</h4>
            </div>
            {/* <div className='tracklist'>
              <h6>Black Sabbath</h6>
              <h6>The Wizard</h6>
              <h6>N.I.B.</h6>
              <h6>Evil Woman</h6>
              <h6>Sleeping Village</h6>
              <h6>Warning</h6>
            </div>   */}
          </div>
        </div>
        <div className='album-display row'>
          <div className='buttons col-lg text-center'>
              <Button 
                onClick={() => handleAddRecord (record)} 
                profile={profile} variant="outline-success">
                Add to Collection</Button>
              <StarRating  />
              <Form>
              <FloatingLabel controlId="reviews" label="Write a Review">
                <Form.Control
                type="text" 
                onChange={(e) => handleChange(e)}
                value={comment.commentText}
                name="commentText" 
                  as="textarea"
                  placeholder="Write a review here"
                  style={{ height: '100px' }} />
              </FloatingLabel>
                <Button variant="outline-success" type="submit"
                  onClick={(e) => {
                    handleAddComment(e, filteredAlbum._id, comment)
                    setComment({commentText: ''})
                  } }>
                  Submit
                </Button>
              </Form>
            </div>
          </div>
          {filteredAlbum !== undefined &&
          
          <CommentList album={filteredAlbum} />
          }

      </div>
    </main>
  )
}

export default RecordDetails;
