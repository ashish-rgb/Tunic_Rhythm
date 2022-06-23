import React from "react";
import Avatar from "./Avatar";
import BRating from "./BRating";


function Entry(props) {
  return (
    <div className="term">
      <dt>
        <span className="singerimg" role="img" aria-label="Tense Biceps">
          <Avatar img={props.img} />
        </span>
        <span>{props.name}</span>
      </dt>
      <dd>{"Release Date : " + props.release}</dd>
      <BRating rating = {props.rating}/>
      <dd>{"Artists name : " + props.artists}</dd>
    </div>
  );
}

export default Entry;