import { FC } from "react";

export const AddProduct: FC = () => {
  const categories = [
    "Electronics",
    "Wearables",
    "Photography",
    "Audio",
    "Smart Home",
    "Gaming",
    "Transportation",
  ];

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form className="p-3 rounded shadow-md bg-slate-50 w-[600px] flex flex-col">
        <h2 className="mb-5 font-bold text-xl">Add Product</h2>
        <input
          type="text"
          className="bg-white mb-3 rounded p-2"
          placeholder="name"
        />
        <input
          type="text"
          className="bg-white mb-3 rounded p-2"
          placeholder="description"
        />
        <input
          type="number"
          className="bg-white mb-3 rounded p-2"
          placeholder="price"
        />
        <select className="bg-white mb-3 rounded p-2">
          <option value="" disabled selected>
            Select a category
          </option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
        <input
          type="number"
          className="bg-white mb-3 rounded p-2"
          placeholder="stock"
        />
        <input
          type="url"
          className="bg-white mb-3 rounded p-2"
          placeholder="image URL"
        />
        <button type="submit" className="bg-blue-500 rounded p-2 text-white">
          Submit
        </button>
      </form>
    </div>
  );
};
