import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Product {
  name: string;
  description: string;
  price: number;
  category: string;
  stock: number;
  image: string;
}
const fetchAllProductsSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/api", // Root URL
  }),

  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => "/products/get-all-products", // Adjusted endpoint
    }),
  }),
});

export const { useGetProductsQuery } = fetchAllProductsSlice; // Updated export
export default fetchAllProductsSlice;
