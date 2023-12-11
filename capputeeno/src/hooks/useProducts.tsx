import { useDeferredValue } from "react";

import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";

import { ProductsFetchResponse } from "@/types/products-response";

import { mountQuery } from "@/utils/graphql-filters";

import { useFilter } from "./useFilter";

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

const fetcher = (query: string): AxiosPromise<ProductsFetchResponse> => {
  return axios.post(API_URL, { query });
};

export function useProducts() {
  const { type, priority, search } = useFilter();
  const searchDeffered = useDeferredValue(search);
  const query = mountQuery(type, priority);
  const { data } = useQuery({
    queryFn: () => fetcher(query),
    queryKey: ["products", type, priority],
    staleTime: 1000 * 60 * 1,
  });

  const products = data?.data?.data?.allProducts;
  const filteredProducts = products?.filter((product) =>
    product.name.toLocaleLowerCase().includes(searchDeffered.toLowerCase())
  );

  return {
    data: filteredProducts,
  };
}
