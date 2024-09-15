import { api } from "./index";

const productApi = api.injectEndpoints({
  endpoints: (build) => ({
    productQuery: build.query({
      query: (id) => ({
        url:"/product/single-product/66a5fe5aef9f646863b22f6f", 
      }),
    }),
  }),
});

export const { useProductQuery } = productApi;
