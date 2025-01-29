import "./menus.css";

const Menus = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <>
          <div className="navbar-profile-pic">
            <img src="../public/profile2.png" alt="profile pic" />
          </div>
        </>
      ) : (
        <h1>icons</h1>
      )}
    </>
  );
};

export default Menus;
