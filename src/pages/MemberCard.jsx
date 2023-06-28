import User from "../components/User";
import "../styles/MemberCard.css";
import { useNavigate } from "react-router-dom";

const MemberCard = () => {
  const navigate = useNavigate();

  return (
    <div className="member">
      <div className="card">
        <button onClick={() => navigate("/users")} className="closeBtn">
          x
        </button>
        <div className="profile">
          <div className="imgContainer">
            <img
              src="https://cdn-icons-png.flaticon.com/512/147/147142.png"
              alt="profile Pic"
            />
          </div>
          <User />
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
