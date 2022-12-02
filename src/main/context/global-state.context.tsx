import React, { createContext, useContext, useState } from "react";

interface CardSelected {
  title: string;
  description: string;
  date: string;
  local: string;
  ticketLimit: number;
  organizer: string;
  category: string;
  banner: string;
}

interface IGlobalStateContext {
  state: CardSelected;
  setState: React.Dispatch<React.SetStateAction<CardSelected>>;
}

const GlobalStateContext = createContext({} as IGlobalStateContext);

function GlobalStateProvider({ children }) {
  const [globalState, setGlobalState] = useState<CardSelected>(
    {} as CardSelected
  );

  return (
    <GlobalStateContext.Provider
      value={{ state: globalState, setState: setGlobalState }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};

const useGlobalState = () => {
  const context = useContext(GlobalStateContext);

  if (!context) {
    throw new Error("useGlobalState must be used within a GlobalStateProvider");
  }

  const { state, setState } = context;

  return { globalState: state, setGlobalState: setState };
};

export { GlobalStateProvider, useGlobalState };

