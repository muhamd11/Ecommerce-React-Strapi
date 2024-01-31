import { ColorModeContext, useMode } from "./theme";
import Header1 from "./components/header/Header1";
import Header2 from "./components/header/Header2";
import { useEffect } from "react";
import { ThemeProvider } from "@emotion/react";
import { Box, CssBaseline } from "@mui/material";
import Hero from "./components/hero/Hero";
import Products from "./components/products/Products";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./components/scroll/ScrollToTop";

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
      <ThemeProvider 
// @ts-ignore
      theme={theme}>
        <CssBaseline />
        <Header1 />
        <Header2 />
        <Box bgcolor={theme.
// @ts-ignore
        palette.bg.main}>
          <Hero />
          <Products />
        </Box>
        <Footer/>
        <ScrollToTop />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
