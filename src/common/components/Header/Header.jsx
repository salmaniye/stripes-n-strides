import "./Header.css";

import { GlobalContext } from "../../../contexts/GlobalContext";
import { useContext } from "react";

const Header = () => {
  const { user } = useContext(GlobalContext);

  return (
    <>
      {user ? (
        <header>
          <h1 style={{ fontFamily: "Open Sans" }}>{user.firstName}</h1>
          <div>
            {user.badge && (
              <img src={user.badge.imgUrl} alt={user.badge.name} />
            )}
            <img src={user.avatarUrl} alt={`${user.firstName} avatar`} />
          </div>
        </header>
      ) : (
        <header style={{ justifyContent: "center" }}>
          <h1 style={{ fontSize: "32px" }}>Stripes n Strides</h1>
        </header>
      )}
    </>
  );
};

export default Header;
