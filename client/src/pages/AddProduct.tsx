import { FC, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import {
  handleCancel,
  handleFormValues,
  handleSubmit,
} from "../features/productSlice";
import {
  useGetProductsQuery,
  useCreateNewProductMutation,
  useUpdateProductMutation,
} from "../features/apiSlice";

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
  const { data: fetchedProducts = [] } = useGetProductsQuery();
  const { refetch } = useGetProductsQuery();

  const [products, setProducts] = useState(fetchedProducts);
  const [createProduct] = useCreateNewProductMutation();
  const [updateProduct] = useUpdateProductMutation();

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const formValues = useAppSelector((state) => state.productSlice.formValues);
  const isEditing = useAppSelector((state) => state.productSlice.isEditing);

  const itemId = useAppSelector((state) => state.productSlice.itemId);

  const { name, description, price, category, stock, image } = formValues;

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

    const productData = {
      name,
      description,
      price: Number(price),
      category,
      stock: Number(stock),
      image,
    };

    try {
      if (isEditing) {
        await updateProduct({ id: itemId, product: productData });

        const updatedProducts = products.map((product) =>
          product._id === itemId ? { ...product, ...productData } : product
        );
        setProducts(updatedProducts);
      } else {
        await createProduct(productData);
      }
      dispatch(handleSubmit());
      navigate("/");
      refetch();
    } catch (error) {
      console.error("Failed to save product: ", error);
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
        <div className="flex items-center gap-3">
          <Link to="/">
            <button
              type="button"
              className="bg-red-500 rounded p-2 hover:bg-red-600 text-white"
              onClick={() => dispatch(handleCancel())}
            >
              cancel
            </button>
          </Link>
          <button
            type="submit"
            className="bg-indigo-500 rounded p-2 hover:bg-indigo-600 text-white"
          >
            {isEditing ? "Update" : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};
