import { api } from "./index";

const productsApi = api.injectEndpoints({
  endpoints: (build) => ({
    products: build.query({
      query: () => ({
        url: "/product/all"
      }),
    })
  }),
});

export const { useProductsQuery } = productsApi;