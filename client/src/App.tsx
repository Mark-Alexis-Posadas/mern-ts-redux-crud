import { FC } from "react";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";

const App: FC = () => {
  return (
    <>
      <Navbar />
      <div className="p-10">
        <Home />
      </div>
    </>
  );
};

export default App;
