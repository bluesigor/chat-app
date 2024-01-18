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
  const [messages, setMessages] = useState<App.Message[]>([
    { id: 1, text: "Hi there!", sender: "bot" },
    { id: 2, text: "Hello!", sender: "user" },
    { id: 3, text: "How can I assist you today?", sender: "bot" },
  ]);

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
