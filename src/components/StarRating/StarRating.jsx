import "./StarRating.scss";
import { useState } from "react";

// DISCLAIMER
// We are still working on this piece, this has so much deadcode BUT will be implimented ASAP.

const StarRating = (props) => {
  const [rating, setRating] = useState("");

  const handleChangeRating = (e) => {
    console.log("hit");
    console.log(e.target.value, "!!!!!!!!!!!!!!!!");
    // props.handleAddRating(e, props.filteredAlbum._id, e.target.value)
    setRating(e.target.value);
  };
  console.log(rating);
  return (
    <>
      <input
        onChange={(e) => handleChangeRating(e)}
        type="number"
        placeholder="rating"
        min="0"
        max="5"
      />
      <button
        onClick={() => props.handleAddRating(props.filteredAlbum._id, rating)}
      >
        submit
      </button>
    </>
    // <main>
    //   <fieldset
    //   className="star-rating"
    //   // handleChangeRating={(e) => handleChangeRating(e)}
    //   onClick={(e) => {
    //         props.handleAddRating(props.filteredAlbum._id, e.target.value)
    //         // setRating({rating: ''})
    //       }}
    //   >
    //     <input type="number" />
    //     <input onChange={(e) => handleChangeRating(e)} type="radio" id="star5" name="rating" value="5" /><label className = "full" htmlFor="star5" title="Awesome - 5 stars"></label>
    //     <input onChange={(e) => handleChangeRating(e)} type="radio" id="star4" name="rating" value="4" /><label className = "full" htmlFor="star4" title="Pretty good - 4 stars"></label>
    //     <input onChange={(e) => handleChangeRating(e)} type="radio" id="star3" name="rating" value="3" /><label className = "full" htmlFor="star3" title="Meh - 3 stars"></label>
    //     <input onChange={(e) => handleChangeRating(e)} type="radio" id="star2" name="rating" value="2" /><label className = "full" htmlFor="star2" title="Kinda bad - 2 stars"></label>
    //     <input onChange={(e) => handleChangeRating(e)} type="radio" id="star1" name="rating" value="1" /><label className = "full" htmlFor="star1" title="Sucks big time - 1 star"></label>
    //   </fieldset>
    // </main>
  );
};

export default StarRating;
