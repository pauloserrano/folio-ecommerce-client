import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalContextProvider } from "../context/GlobalContext";
import { GlobalStyle } from "../styles";
import Home from "./Home";
import CategoryPage from "./CategoryPage"
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <GlobalContextProvider>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/:category" element={<CategoryPage />}></Route>
            <Route path="/signin" element={<SignIn />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="/checkout" element={<></>}></Route>
          </Routes>
      </GlobalContextProvider>
    </BrowserRouter>
  );
}

export default App;
