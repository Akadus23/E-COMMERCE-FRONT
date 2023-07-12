import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

const Reviews = () => {
  const [ratings, setRatings] = useState([
    { id: 1, rating: 4, comment: "Great product!" },
    { id: 2, rating: 5, comment: "Excellent quality!" },
    { id: 3, rating: 3, comment: "Could be better." },
  ]);

  const handleRatingChange = (id, newRating) => {
    setRatings((prevRatings) =>
      prevRatings.map((rating) =>
        rating.id === id ? { ...rating, rating: newRating } : rating
      )
    );
  };

  return (
    <Box>
      <Typography variant="h4" component="h2" gutterBottom>
        Reviews
      </Typography>

      {ratings.map((rating) => (
        <Box key={rating.id} sx={{ mb: 2 }}>
          <Rating
            name={`rating-${rating.id}`}
            value={rating.rating}
            onChange={(event, newRating) =>
              handleRatingChange(rating.id, newRating)
            }
          />
          <Typography variant="body1">{rating.comment}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default Reviews;

