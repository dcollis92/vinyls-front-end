import './RecordDetails.scss';
import { useState } from 'react';
import { Button, Form, FloatingLabel } from 'react-bootstrap';
import { useLocation } from 'react-router-dom'
import Record from '../../components/Record/Record';
import StarRating from '../../components/StarRating/StarRating';
import CommentList from './components/CommentList';
import CurrentRating from '../../components/StarRating/CurrentRating';

const RecordDetails = ({user, handleAddRecord, handleRemoveRecord, profile, handleAddComment, dbRecords, handleUpdate, handleAddRating, handleChangeRating}) => {
  const [comment, setComment] = useState({
    commentText: '',
  })
  
  const location = useLocation()
  const record = location.state.record

  const title = record.title.split(' - ')
  const artist = title[0]
  const album = title[1] 
  
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
            <div className='album'><h4>Artist</h4></div>
            <div className='album'><h4>Release</h4></div>
            <div className='year'><h4>Year</h4></div>
          </div>
          <div className='release-info'>
          <div className='artist'>
              <h4>{artist}</h4>
            </div>
            <div className='album'>
              <h4>{album}</h4>
            </div>
            <div className='year'>
              <h4>{record.year}</h4>
            </div>
          </div>
        </div>
      </div>

      <div className='album-display row'>
        <div className='buttons col-lg text-center'>
          <Button 
            onClick={() => handleAddRecord (record)} 
            profile={profile} variant="outline-success">
            Add to Collection</Button>
        </div>
          {filteredAlbum ?
            <>
              <CurrentRating filteredAlbum={filteredAlbum} />
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
                    handleAddComment(e, filteredAlbum._id, comment);
                    setComment({ commentText: '' });
                  } }>
                  Submit
                </Button>
              </Form>
              <div className='reviews col-md text-center'>
                <div className='single-review'>
                  <h4>Users reviews</h4>
                  {filteredAlbum !== undefined &&
                  <CommentList album={filteredAlbum} 
                  handleUpdate={handleUpdate} 
                  profile={profile}
                  user={user}/>
                  }
                </div>
              </div>
            </>
          :
            <>
              <p>No Reviews Yet</p>
            </>
          }
      </div>
    </main>
  )
}

export default RecordDetails;
