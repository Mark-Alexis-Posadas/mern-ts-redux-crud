import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  stock: number;
  image: string;
}
const fetchAllProductsSlice = createApi({
  reducerPath: "apissss",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/api",
  }),

  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => "/products/get-all-products",
    }),
  }),
});

export const { useGetProductsQuery } = fetchAllProductsSlice;
export default fetchAllProductsSlice;
