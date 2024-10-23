import { FC } from "react";
import { Link } from "react-router-dom";

export const Navbar: FC = () => {
  return (
    <nav className="flex items-center justify-between p-5 bg-slate-50 shadow-md">
      <h1>
        <Link to="/">Home</Link>
      </h1>

      <Link to="/add-product">
        <button className="bg-blue-500 text-white rounded p-2 hover:bg-blue-600">
          Add Product
        </button>
      </Link>
    </nav>
  );
};
