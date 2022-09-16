import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalContextProvider } from "../context/GlobalContext";
import { GlobalStyle } from "../styles";
import Home from "./Home";
import Search from "./Search"

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <GlobalContextProvider>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/:category" element={<Search />}></Route>
            <Route path="/signin" element={<></>}></Route>
            <Route path="/signup" element={<></>}></Route>
            <Route path="/checkout" element={<></>}></Route>
          </Routes>
      </GlobalContextProvider>
    </BrowserRouter>
  );
}

export default App;
