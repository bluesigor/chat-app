import { App } from "../models";

export type AppContextType = {
  messages: App.Message[];
  setMessages: (state: App.Message[]) => void;
};
