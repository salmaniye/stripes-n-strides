import { useState, createContext } from "react";

const GlobalContext = createContext();

const GlobalProvider = (props) => {
  const [user, setUser] = useState({
    firstName: "Justin",
    lastName: "Heath",
    email: "justin@hacks.com",
    avatarUrl: "https://mdbcdn.b-cdn.net/img/new/avatars/2.webp",
    badge: {
      name: "Gold",
      imgUrl:
        "https://png.pngtree.com/png-clipart/20190604/original/pngtree-badge-png-image_996483.jpg",
    },
  });

  return (
    <GlobalContext.Provider value={{ user, setUser }}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
