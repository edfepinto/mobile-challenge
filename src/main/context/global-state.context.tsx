import React, { createContext, useContext, useState } from "react";

interface GlobalStateAttributes {}

interface IGlobalStateContext {
  globalState: GlobalStateAttributes;
  setGlobalState: React.Dispatch<React.SetStateAction<GlobalStateAttributes>>;
}

const GlobalStateContext = createContext({} as IGlobalStateContext);

function GlobalStateProvider({ children }) {
  const [globalState, setGlobalState] = useState<GlobalStateAttributes>(
    {} as GlobalStateAttributes
  );

  return (
    <GlobalStateContext.Provider value={{ globalState, setGlobalState }}>
      {children}
    </GlobalStateContext.Provider>
  );
}

const useGlobalState = () => {
  const context = useContext(GlobalStateContext);

  if (!context) {
    throw new Error("useGlobalState must be used within a GlobalStateProvider");
  }

  const { globalState, setGlobalState } = context;

  return { globalState, setGlobalState };
};

export { GlobalStateProvider, useGlobalState };
