import { FC } from "react";
import { useGetProductsQuery } from "./features/fetchSlice";

const App: FC = () => {
  const { data: products } = useGetProductsQuery();
  console.log(products);
  return <div></div>;
};

export default App;
