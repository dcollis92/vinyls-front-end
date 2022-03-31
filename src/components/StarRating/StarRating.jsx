import './StarRating.scss';

// <!-- Pure CSS Star Widget -->
const StarRating = (props) => {

  return (
    <main>
      <fieldset className="star-rating">
        <input type="radio" id="star5" name="rating" value="5" /><label className = "full" for="star5" title="Awesome - 5 stars"></label>
        <input type="radio" id="star4" name="rating" value="4" /><label className = "full" for="star4" title="Pretty good - 4 stars"></label>
        <input type="radio" id="star3" name="rating" value="3" /><label className = "full" for="star3" title="Meh - 3 stars"></label>
        <input type="radio" id="star2" name="rating" value="2" /><label className = "full" for="star2" title="Kinda bad - 2 stars"></label>
        <input type="radio" id="star1" name="rating" value="1" /><label className = "full" for="star1" title="Sucks big time - 1 star"></label>
      </fieldset>  
    </main>
  );
}
 
export default StarRating;