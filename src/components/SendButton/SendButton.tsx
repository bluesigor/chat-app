import { FC } from "react";
import { Button, Grid } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

type SendButtonPropsType = {
  onSend: () => void;
};

const SendButton: FC<SendButtonPropsType> = ({ onSend }) => {
  return (
    <Grid item xs={2}>
      <Button
        fullWidth
        size="large"
        color="primary"
        variant="contained"
        endIcon={<SendIcon />}
        onClick={onSend}>
        Send
      </Button>
    </Grid>
  );
};

export default SendButton;
