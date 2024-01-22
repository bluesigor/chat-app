import { FC } from "react";
import { TextField, Grid } from "@mui/material";

import { App } from "../../models";

type TextInputPropsType = {
  message: App.Message;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const TextInput: FC<TextInputPropsType> = ({ message, onChange }) => {
  return (
    <Grid item xs={10}>
      <TextField
        fullWidth
        size="small"
        placeholder="Type a message"
        variant="outlined"
        value={message?.text}
        onChange={onChange}
      />
    </Grid>
  );
};

export default TextInput;
