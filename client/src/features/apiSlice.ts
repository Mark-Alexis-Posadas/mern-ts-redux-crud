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
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000/api" }),
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => "/products/get-all-products",
    }),
    getSingleProduct: builder.query<Product, string>({
      query: (id) => `/products/get-single-product/${id}`,
    }),
    createNewProduct: builder.mutation<Product, Partial<Product>>({
      query: (newProduct) => ({
        url: "/products/create-new-product",
        method: "POST",
        body: newProduct,
      }),
    }),
    updateProduct: builder.mutation<
      Product,
      { id: string; product: Partial<Product> }
    >({
      query: ({ id, product }) => ({
        url: `/products/update-product/${id}`,
        method: "PUT",
        body: product,
      }),
    }),
    deleteProduct: builder.mutation<void, string>({
      query: (id) => ({
        url: `/products/delete-product/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useCreateNewProductMutation,
  useGetSingleProductQuery,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = apiSlice;
export default apiSlice;
