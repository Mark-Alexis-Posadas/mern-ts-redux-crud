import { FC } from "react";
import {
  useDeleteProductMutation,
  useGetProductsQuery,
} from "../features/apiSlice";

import { Link } from "react-router-dom";
import { handleEdit, handleToggleDelete } from "../features/productSlice";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { ConfirmationDeleteModal } from "../components/ConfirmationDeleteModal";
export const Home: FC = () => {
  const { data: products } = useGetProductsQuery();
  const [deleteProduct] = useDeleteProductMutation();
  const isDelete = useAppSelector(
    (state) => state.productSlice.isConfirmDelete
  );

  const dispatch = useAppDispatch();

  const handleToggleEdit = () => {
    dispatch(handleEdit());
  };

  const handleToDeelte = async (id: string) => {
    console.log("item to delete");
    dispatch(handleToggleDelete());
    try {
      await deleteProduct(id).unwrap();
    } catch (error) {
      console.error("Failed to delete item: ", error);
    }
  };

  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                onClick={() => handleToDeelte(item._id)}
              >
                delete
              </button>
              <button
                className="text-white bg-blue-500 p-2 rounded"
                onClick={handleToggleEdit}
              >
                <Link to="/add-product">edit</Link>
              </button>
            </div>
          </div>
        ))}
      </div>
      {isDelete && <ConfirmationDeleteModal />}
    </section>
  );
};
