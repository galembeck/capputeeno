"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { FilterBar } from "@/components/catalogue/filters/filter-bar";
import { ProductsList } from "@/components/catalogue/products/products-list";

import styles from "./page.module.css";

export default function Home() {
  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <main className={styles.main}>
        <FilterBar />
        <ProductsList />
      </main>
    </QueryClientProvider>
  );
}
