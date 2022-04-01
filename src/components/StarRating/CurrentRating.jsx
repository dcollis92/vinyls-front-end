import './StarRating.scss';


const CurrentRating = (props) => {

  console.log(props)

  const ratings = props.filteredAlbum?.ratings
  // const getRating = () => {
  //   if(!ratings.length) return 0;
  // const avg = ratings.reduce((total, r) => 
  //   total + parseInt(r.rating), 0) 
  // return Math.round(avg / ratings.length);
  // }
  console.log(ratings)
  const avg = ratings?.reduce((total, r) => {
    console.log(r);
    r.rating = !r.rating ? 0 : r.rating
   return total + parseInt(r.rating)}, 0) 
  console.log(avg);
  const stars = Math.round(avg / ratings?.length)

  console.log(stars);
  
  return (
    <div>
      <h5>Rating: </h5>
      <h5>{isNaN(stars) ? 0 : stars}</h5>
    </div>
  );
}
 
export default CurrentRating;