import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const cartApi = createApi({
  reducerPath: 'cartApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_BASE_URL}/api/`}),
  endpoints: (builder) => ({
    getCart: builder.query({
      query: (name) => `${name}`,
    }),
    addToCart: builder.mutation({
        query: (data) => ({
          url: 'carts',
          method: 'POST',
          body: data.data
        })
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetCartQuery, useAddToCartMutation } = cartApi