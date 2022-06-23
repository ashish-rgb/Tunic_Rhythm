import * as React from 'react';
import Rating from '@mui/material/Rating';

 function BRating(props) {
  return (
    
      <Rating name="half-rating" defaultValue={props.rating} precision={0.5} />
   
  );
}

export default BRating;