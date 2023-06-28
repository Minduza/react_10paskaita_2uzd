import Users from "../components/Users";
import "../styles/Members.css";
const Members = () => {
  return (
    <div className="main">
      <div className="heroImg">
        <h1 className="memberTitle">Honorary Members</h1>
      </div>
      <p className="honoraryP">
        Becoming an honorary member of Chelsea F.C. brings a sense of pride,
        granting exclusive access to unforgettable football experiences.
      </p>
      <Users className="wrapperMember" />
    </div>
  );
};

export default Members;
