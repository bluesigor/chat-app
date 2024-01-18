import { useState } from "react";
import { Box, TextField, Button, Grid } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

import { useAppContext } from "../../context/AppContext";
import { App } from "../../models";
import { idGenerator } from "../../core/helpers/helpers";

const TextInput = () => {
  const [messageEntity, setMessageEntity] = useState<App.Message>({
    id: null,
    text: "",
    sender: "",
  });

  const { setMessages, messages } = useAppContext();

  const uniqueId = idGenerator();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessageEntity({ id: uniqueId, sender: "user", text: e.target.value });
  };

  const handleSend = () => {
    setMessages([...messages, messageEntity]);
    setMessageEntity({ id: null, sender: "", text: "" });
  };

  return (
    <Box sx={{ p: 2, backgroundColor: "background.default" }}>
      <Grid container spacing={2}>
        <Grid item xs={10}>
          <TextField
            fullWidth
            size="small"
            placeholder="Type a message"
            variant="outlined"
            value={messageEntity?.text}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={2}>
          <Button
            fullWidth
            size="large"
            color="primary"
            variant="contained"
            endIcon={<SendIcon />}
            onClick={handleSend}>
            Send
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TextInput;
