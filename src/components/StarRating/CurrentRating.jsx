import './StarRating.scss';


const CurrentRating = (props) => {

  const ratings = props.filteredAlbum?.ratings
  
  const avg = ratings?.reduce((total, r) => {
    console.log(r);
    r.rating = !r.rating ? 0 : r.rating
   return total + parseInt(r.rating)}, 0) 
  console.log(avg);
  const stars = Math.round(avg / ratings?.length)

  return (
    <div>
      <h5>Rating: </h5>
      <h5>{isNaN(stars) ? 0 : stars}</h5>
    </div>
  );
}
 
export default CurrentRating;