import "./StarRating.scss";
import { useState } from "react";

const StarRating = (props) => {
  const [rating, setRating] = useState("");

  const handleChangeRating = (e) => {
    setRating(e.target.value);
  };

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
  );
};

export default StarRating;
