import './ArtistDetails.scss';
import { useLocation } from 'react-router-dom'
import Artist from '../../components/Artist/Artist';

const ArtistDetails = () => {
  const location = useLocation()
  const record = location.state.record

  return (
    <main className='artist-details'>
      <Artist key={record.title} record={record} />
      
    </main>
  )
}

export default ArtistDetails;