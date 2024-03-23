import "./Header.css";

const Header = ({ user }) => {
  return (
    <header>
      {user ? (
        <>
          <h1 style={{ fontFamily: "Open Sans" }}>
            {user.firstName + " " + user.lastName}
          </h1>
          {user.badge && <img src={user.badge.imgUrl} alt={user.badge.name} />}
          <img src={user.avatarUrl} alt={`${user.firstName} avatar`} />
        </>
      ) : (
        <h1>Stripes n Strides</h1>
      )}
    </header>
  );
};

export default Header;
