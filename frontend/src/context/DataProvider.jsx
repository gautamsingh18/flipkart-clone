import { useState, createContext } from "react";
/* eslint-disable react/prop-types */
export const DataContext = createContext(null);
const DataProvider = ({ children }) => {
  const [account, setAccount] = useState(null);
  return (
    <DataContext.Provider value={{ account, setAccount }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
