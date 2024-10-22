import { FC } from "react";
import { handleFormValues } from "../features/addProductSlice";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
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

  const { name, description, price, category, stock, image } = useAppSelector();
  const dispatch = useAppDispatch();

  const handleFormChange = (e) => {
    dispatch(handleFormValues({ name: e.target.name, value: e.target.value }));
  };

  return (
    <div className="flex items-center justify-center min-h-calc">
      <form className="p-3 rounded shadow-md bg-slate-50 w-[600px] flex flex-col">
        <h2 className="mb-5 font-bold text-xl">Add Product</h2>
        <input
          type="text"
          className="bg-white mb-3 rounded p-2"
          placeholder="name"
          name="name"
          value={name}
          onChange={handleFormChange}
        />
        <input
          type="text"
          className="bg-white mb-3 rounded p-2"
          placeholder="description"
          name="description"
          value={description}
          onChange={handleFormChange}
        />
        <input
          type="number"
          className="bg-white mb-3 rounded p-2"
          placeholder="price"
          name="price"
          value={price}
          onChange={handleFormChange}
        />
        <select
          className="bg-white mb-3 rounded p-2"
          name="catergory"
          value={category}
          onChange={handleFormChange}
        >
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
          name="stock"
          value={stock}
          onChange={handleFormChange}
        />
        <input
          type="url"
          className="bg-white mb-3 rounded p-2"
          placeholder="image URL"
          name="image"
          value={image}
          onChange={handleFormChange}
        />
        <button
          type="submit"
          className="bg-indigo-500 rounded p-2 hover:bg-indigo-600 text-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
