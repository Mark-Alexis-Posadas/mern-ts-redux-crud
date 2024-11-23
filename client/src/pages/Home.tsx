import { FC, useState, useEffect } from "react";
import { useGetProductsQuery } from "../features/apiSlice";

import { Link } from "react-router-dom";
import {
  handleEdit,
  handleFormValues,
  handleSetItemId,
  handleToggleDelete,
} from "../features/productSlice";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { ConfirmationDeleteModal } from "../components/ConfirmationDeleteModal";
interface T {
  name: string;
  description: string;
  price: number;
  category: string;
  stock: number;
  image: string;
  _id: string;
}
export const Home: FC = () => {
  const { data: fetchedProducts = [] } = useGetProductsQuery();

  const [products, setProducts] = useState(fetchedProducts);

  const isDelete = useAppSelector(
    (state) => state.productSlice.isConfirmDelete
  );

  const dispatch = useAppDispatch();

  const handleToggleEdit = (product: T) => {
    dispatch(handleEdit());
    dispatch(handleFormValues({ name: "name", value: product.name }));
    dispatch(
      handleFormValues({ name: "description", value: product.description })
    );
    dispatch(
      handleFormValues({ name: "price", value: product.price.toString() })
    );
    dispatch(handleFormValues({ name: "category", value: product.category }));
    dispatch(
      handleFormValues({ name: "stock", value: product.stock.toString() })
    );
    dispatch(handleFormValues({ name: "image", value: product.image }));
    dispatch(handleSetItemId(product._id));
  };

  const handleToDelete = (id: string) => {
    dispatch(handleToggleDelete(id));
  };

  useEffect(() => {
    setProducts(fetchedProducts);
  }, [fetchedProducts]);

  const handleDeleteSuccess = (id: string) => {
    setProducts(products.filter((product) => product._id !== id));
  };

  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {products?.map((item) => (
          <div key={item._id} className="bg-white rounded-lg shadow-lg p-5">
            <img
              src={item.image}
              alt={item.name}
              className="h-40 w-full object-cover mb-4 rounded-t-lg"
            />
            <h2 className="text-2xl font-bold mb-2">{item.name}</h2>
            <p className="text-gray-700 mb-4">{item.description}</p>
            <div className="flex items-center justify-between">
              <span className="text-xl font-semibold">${item.price}</span>
              <span className="text-sm text-gray-500">{item.category}</span>
              <span className="text-sm text-gray-500">
                {item.stock} in stock
              </span>
            </div>
            <div className="flex items-center gap-4 mt-5">
              <button
                className="text-white bg-red-500 p-2 rounded"
                onClick={() => handleToDelete(item._id)}
              >
                delete
              </button>
              <Link to="/add-product">
                <button
                  className="text-white bg-blue-500 p-2 rounded"
                  onClick={() => handleToggleEdit(item)}
                >
                  edit
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      {isDelete && (
        <ConfirmationDeleteModal onDeleteSuccess={handleDeleteSuccess} />
      )}
    </section>
  );
};
