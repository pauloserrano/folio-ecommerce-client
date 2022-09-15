import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalContextProvider } from "../context/GlobalContext";
import { GlobalStyle, Fonts } from "../styles";
import ProductPage from "./ProductPage";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Fonts />
      <GlobalContextProvider>
          <Routes>
            <Route path="/" element={<>Home</>}></Route>
            <Route path="/signin" element={<></>}></Route>
            <Route path="/signup" element={<></>}></Route>
            <Route path="/checkout" element={<></>}></Route>
            <Route path="/products/:PRODUCT_ID" element={ <ProductPage /> }></Route>
          </Routes>
      </GlobalContextProvider>
    </BrowserRouter>
  );
}

export default App;
