import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { handleFormValues } from "../features/addProductSlice";
import { useCreateNewProductMutation } from "../features/apiSlice";

const categories = [
  "Electronics",
  "Wearables",
  "Photography",
  "Audio",
  "Smart Home",
  "Gaming",
  "Transportation",
];

export const AddProduct: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const formValues = useAppSelector(
    (state) => state.addProductSlice.formValues
  );
  const isEditing = useAppSelector((state) => state.addProductSlice.isEditing);
  const { name, description, price, category, stock, image } = formValues;
  const [createProduct] = useCreateNewProductMutation();
  console.log(isEditing);
  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    dispatch(
      handleFormValues({
        name: e.target.name as keyof typeof formValues,
        value: e.target.value,
      })
    );
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !description || !price || !category || !stock || !image) {
      alert("Please fill out the fields");
      return;
    }
    try {
      await createProduct({
        ...formValues,
        price: Number(formValues.price),
        stock: Number(formValues.stock),
      });
      navigate("/");
    } catch (error) {
      console.error("Failed to create product: ", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form
        className="p-3 rounded shadow-md bg-slate-50 w-[600px] flex flex-col"
        onSubmit={handleFormSubmit}
      >
        <h2 className="mb-5 font-bold text-xl">
          {isEditing ? "Edit Product" : "Add Product"}
        </h2>
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
          name="category"
          value={category}
          onChange={handleFormChange}
        >
          <option value="" disabled>
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
