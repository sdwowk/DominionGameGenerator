import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { createTheme, MantineProvider } from "@mantine/core";

const theme = createTheme({
  components: {
    AppShell: {
      styles: {
        header: {
          minHeight: "5vh",
          backgroundColor: "#2d9cdb", // light blue background
        },
        main: {
          backgroundColor: "#2d9cdb", // light blue background
          minHeight: "95vh",
        },
      },
    },
  },
});

const container = document.getElementById("root");
const root = createRoot(container); // Create a root.
root.render(
  <BrowserRouter>
    <MantineProvider theme={theme}>
      <App />
    </MantineProvider>
  </BrowserRouter>
);
