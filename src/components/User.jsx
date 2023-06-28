import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((resp) => resp.json())
      .then((response) => {
        setUser(response);
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  }, [id]);

  if (isLoading || !user) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <table>
      <tbody>
        <tr>
          <td>Username</td>
          <td>{user.username}</td>
        </tr>
        <tr>
          <td>Name</td>
          <td>{user.name}</td>
        </tr>
        <tr>
          <td>Email</td>
          <td>{user.email}</td>
        </tr>
        <tr>
          <td>Phone</td>
          <td>{user.phone}</td>
        </tr>
        <tr>
          <td>City</td>
          <td>{user.address.city}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default User;
