import { useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";

import SendButton from "../SendButton";
import TextInput from "../TextInput";

import { useAppContext } from "../../context/AppContext";
import { App } from "../../models";
import { idGenerator } from "../../core/helpers/helpers";
import useRandom from "../../core/hooks/useRandom";

const MessageContainer = () => {
  const [messageEntity, setMessageEntity] = useState<App.Message>({
    id: null,
    text: "",
    sender: "",
  });

  const { setMessages, messages } = useAppContext();
  const { fetchJoke, joke } = useRandom();

  const uniqueId = idGenerator();

  useEffect(() => {
    if (joke.text) {
      setMessages([...messages, { ...joke }]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [joke]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessageEntity({ id: uniqueId, sender: "user", text: e.target.value });
  };

  const handleSend = () => {
    setMessages([...messages, { ...messageEntity }]);
    setMessageEntity({ id: null, sender: "", text: "" });
    setTimeout(() => {
      fetchJoke();
    }, 1300);
  };

  return (
    <Box sx={{ p: 2, backgroundColor: "background.default" }}>
      <Grid container spacing={2}>
        <TextInput onChange={handleInputChange} message={messageEntity} />
        <SendButton onSend={handleSend} />
      </Grid>
    </Box>
  );
};

export default MessageContainer;
