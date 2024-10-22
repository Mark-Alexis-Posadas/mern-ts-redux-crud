import { FC } from "react";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { AddProduct } from "./pages/AddProduct";

const App: FC = () => {
  return (
    <>
      <Navbar />
      <div className="p-10">
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="add-product" element={<AddProduct />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
