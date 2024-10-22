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
const apiSlice = createApi({
  reducerPath: "apissss",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/api",
  }),

  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => "/products/get-all-products",
    }),

    getSingleProduct: builder.query<Product[], void>({
      query: (id) => `/products/get-single-product/${id}`,
    }),
  }),
});

export const { useGetProductsQuery } = apiSlice;
export default apiSlice;
