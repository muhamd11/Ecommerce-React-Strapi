import { ColorModeContext, useMode } from "./theme";
import Header1 from "./components/header/Header1";
import Header2 from "./components/header/Header2";
import { useEffect } from "react";
import { ThemeProvider } from "@emotion/react";
import { Box, CssBaseline } from "@mui/material";
import Hero from "./components/hero/Hero";

function App() {
  const [theme, colorMode] = useMode();
  useEffect(() => {
    document.title = "Ecommerce";
  }, []);

  return (
    <ColorModeContext.Provider
      // @ts-ignore
      value={colorMode}
    >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header1 />
        <Header2 />
        <Box bgcolor={theme.palette.bg.main}>
          <Hero />
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
