import React, { createContext, useContext, useState } from "react";
import { TicketEntityBody } from "~/domain/entities/ticket.entity";

interface GlobalStateAttributes {
  tickets: TicketEntityBody[];
}

interface IGlobalStateContext {
  globalState: GlobalStateAttributes;
  setGlobalState: React.Dispatch<React.SetStateAction<GlobalStateAttributes>>;
}

const defaultGlobalStateValue: GlobalStateAttributes = {
  tickets: [],
};

const GlobalStateContext = createContext({} as IGlobalStateContext);

function GlobalStateProvider({ children }) {
  const [globalState, setGlobalState] = useState<GlobalStateAttributes>(
    defaultGlobalStateValue
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
