import { Box } from "@mui/material";

import "./App.css";
import MessageList from "./components/MessageList";
import TextInput from "./components/TextInput";
import { AppContextProvider } from "./context/AppContext";

function App() {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        bgcolor: "grey.200",
      }}>
      <AppContextProvider>
        <MessageList />
        <TextInput />
      </AppContextProvider>
    </Box>
  );
}

export default App;
