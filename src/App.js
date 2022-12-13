import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import AddProduct from "./pages/AddProduct";
import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Toaster />
        <Routes>
          <Route path="/">
            <Route index element={<Home />}></Route>
            <Route path="/addProduct" element={<AddProduct />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
