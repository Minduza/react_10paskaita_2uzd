import "../styles/NameCard.css";
import PropTypes from "prop-types";

const NameCard = ({ children, photo }) => {
  return (
    <div className="nameCard">
      <img src={photo} alt={children} />
      <h3 className="name">{children}</h3>
    </div>
  );
};

NameCard.propTypes = {
  children: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
};

export default NameCard;
