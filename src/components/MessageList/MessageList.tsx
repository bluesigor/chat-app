import { Box } from "@mui/material";

import Message from "../Message/Message";

import { useAppContext } from "../../context/AppContext";

const MessageList = () => {
  const { messages } = useAppContext();

  return (
    <Box sx={{ flexGrow: 1, overflow: "auto", p: 2 }}>
      {messages.map((message) => (
        <Message key={message.id} data={message} />
      ))}
    </Box>
  );
};

export default MessageList;
