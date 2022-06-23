import React from "react";
import content from "../content";
import Entry from "./Entry";

function ArtistGrid(){
 return( <div>
     <dl className="dictionary">
        {content.map(e => (
          <Entry
            key={e.id}
            img={e.imgURL}
            name={e.name}
            release={e.release}
            rating = {e.rating}
            artists = {e.artists}
          />
        ))}
      </dl>
      </div>);
}

export default ArtistGrid;