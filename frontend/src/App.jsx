import { ColorModeContext, useMode } from "./theme";
import Header1 from "./components/header/Header1";
import Header2 from "./components/header/Header2";
import { useEffect } from "react";
import { ThemeProvider } from "@emotion/react";
import { Box, CssBaseline } from "@mui/material";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./components/scroll/ScrollToTop";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./components/auth/Signin";
import MainPage from "./components/mainPage/MainPage";
import Signup from "./components/auth/Signup";
import Cart from "./components/cart/Cart";


function App() {
  const [theme, colorMode] = useMode();
  useEffect(() => {
    document.title = "Ecommerce";
  }, []);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Header1 />
          <Header2 />
          <Box bgcolor={theme.palette.bg.main}>
            <Routes>
              <Route path="/" element={<MainPage/>}/>
              <Route path="/login" element={<SignIn />} />
              <Route path="/register" element={<Signup />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </Box>
          <Footer />
          <ScrollToTop />
        </BrowserRouter>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
