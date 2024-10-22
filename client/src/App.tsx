import { FC } from "react";
import { useGetProductsQuery } from "./features/apiSlice";

const App: FC = () => {
  const { data: products } = useGetProductsQuery();

  return (
    <div>
      {products?.map((item) => (
        <div key={item._id}>
          <img src={item.image} alt="" />
          <h2>{item.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default App;
