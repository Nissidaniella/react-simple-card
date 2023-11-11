import React from "react";

const Image = ({ photo }) => {
  return (
    <div className="card-photo">
      <img src={photo} />
    </div>
  );
};

export default Image;
