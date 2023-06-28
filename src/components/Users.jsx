import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NameCard from "./NameCard";
import PropTypes from "prop-types";

const Users = ({ className }) => {
  const [users, setUsers] = useState([]);

  const navigate = useNavigate();

  const clickHandler = (userId) => {
    navigate(`/user/${userId}`);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => resp.json())
      .then((response) => setUsers(response))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className={className}>
      {users.map((user, index) => (
        <div
          key={index}
          onClick={() => {
            clickHandler(user.id);
          }}
        >
          <NameCard photo="https://cdn-icons-png.flaticon.com/512/147/147142.png">
            {user.name}
          </NameCard>
        </div>
      ))}
    </div>
  );
};

Users.propTypes = {
  className: PropTypes.string,
};

export default Users;
