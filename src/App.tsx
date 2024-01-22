import { Box } from "@mui/material";

import MessageList from "./components/MessageList";
import MessageContainer from "./components/MessageContainer";

import { AppContextProvider } from "./context/AppContext";
import "./App.css";

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
        <MessageContainer />
      </AppContextProvider>
    </Box>
  );
}

export default App;
