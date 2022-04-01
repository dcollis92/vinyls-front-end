import './RecordDetails.scss';
import { useState } from 'react';
import { Button, Form, FloatingLabel } from 'react-bootstrap';
import { useLocation } from 'react-router-dom'
import Record from '../../components/Record/Record';
import Artist from '../../components/Artist/Artist';
import StarRating from '../../components/StarRating/StarRating';
import CommentList from './components/CommentList';
import CurrentRating from '../../components/StarRating/CurrentRating';

const RecordDetails = ({handleAddRecord, handleRemoveRecord, profile, handleAddComment, dbRecords, handleUpdate, handleAddRating, handleChangeRating}) => {
  const [comment, setComment] = useState({
    commentText: '',
  })
  
  const location = useLocation()
  const record = location.state.record
  
  const filteredAlbum = dbRecords.find(album =>
    album.master_id === record.master_id
    )
  

    const handleChange = e => {

      setComment({
        ...comment,
        [e.target.name]: e.target.value,
      })
    }

  return (
    <main className='record-details'>
      <div className='album-display row'>
        <div className='album-header text-center'>
          <h1>Album Details</h1>
        </div>
        <div className='cover-display col-md text-center'>
          <div className='single-record'>
            <div className='record-img'>
              <Record key={record.title} record={record} handleAddRecord={handleAddRecord} handleRemoveRecord={handleRemoveRecord} profile={profile} />
            </div>
          </div>
        </div>
        <div className='details-display col-md'>
          <div className='categories'>
            <div className='year'><h5>Year</h5></div>
            <div className='album'><h5>Album</h5></div>
          </div>
          <div className='release-info'>
            <div className='year'>
              <h5>{record.year}</h5>
            </div>
            <div className='album'>
              <h5>{record.title}</h5>
            </div>
            
          </div>
        </div>
      </div>
      <div className='album-display row'>
        <div className='buttons col-lg text-center'>
          <Button 
            onClick={() => handleAddRecord (record)} 
            profile={profile} variant="outline-success">
            Add to Collection
          </Button>
          <CurrentRating filteredAlbum={filteredAlbum}  />
          <StarRating  
          handleAddRating={handleAddRating}
          handleChangeRating={handleChangeRating}
          filteredAlbum={filteredAlbum} />
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
              }}>
              Submit
            </Button>
          </Form>
        </div>
        <div className='reviews col-md text-center'>
          <div className='single-review'>
            <h4>Users reviews</h4>
            {filteredAlbum !== undefined &&
            <CommentList album={filteredAlbum} handleUpdate={handleUpdate}/>
            }
          </div>
        </div>
      </div>
    </main>
  )
}

export default RecordDetails;
