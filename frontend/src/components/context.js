import React, { useState } from "react";

export const adminContext = React.createContext();

export const Contxt = (props) => {
  const [admin, setAdmin] = useState(false);
  return (
    <div>
      <adminContext.Provider value={[admin, setAdmin]}>
        {props.children}
      </adminContext.Provider>
    </div>
  );
};
