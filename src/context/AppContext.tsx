import { createContext, useState, useContext } from "react";

import { AppContextType } from "./AppContextType";

import { App } from "../models";

const defaultState: AppContextType = {
  messages: [],
  setMessages: (state: App.Message[]) => {},
};

const AppContext = createContext(defaultState);

export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [messages, setMessages] = useState<App.Message[]>([]);

  const contextValue = {
    messages,
    setMessages,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
