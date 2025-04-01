import React from "react";
import './index.css'
function Destination({ name, location, image, description, price }) {
  return (
    <div className="destination-card">
      <img src={image} alt={name} className="destination-image" />
      <h2>{name}</h2>
      <p><strong>Location:</strong> {location}</p>
      <p>{description}</p>
      <p><strong>Price:</strong> {price}</p>
    </div>
  );
}

export default Destination;
