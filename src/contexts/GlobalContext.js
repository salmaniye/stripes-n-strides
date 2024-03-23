import { useState, createContext } from "react";

const GlobalContext = createContext();

const GlobalProvider = (props) => {
  const [user, setUser] = useState({
    firstName: "Justin",
    lastName: "Heath",
    email: "justin@hacks.com",
  });

  return (
    <GlobalContext.Provider value={{ user, setUser }}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
