import React from "react";
import "../styles/Activities.css";
import PropTypes from "prop-types";

const ActivitiesCard = ({ description, image, title, className }) => {
  return (
    <div className={`activityCard ${className} `}>
      <div className="textBlock">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>

      <div className="imageContainer">
        <img src={image} alt={title} />
      </div>
    </div>
  );
};

ActivitiesCard.propTypes = {
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default ActivitiesCard;
