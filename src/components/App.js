import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalContextProvider } from "../context/GlobalContext";
import { GlobalStyle } from "../styles";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <GlobalContextProvider>
          <Routes>
            <Route path="/" element={<>Home</>}></Route>
            <Route path="/signin" element={<></>}></Route>
            <Route path="/signup" element={<></>}></Route>
            <Route path="/checkout" element={<></>}></Route>
          </Routes>
      </GlobalContextProvider>
    </BrowserRouter>
  );
}

export default App;
