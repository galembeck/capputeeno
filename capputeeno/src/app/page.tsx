"use client";

import { QueryClient } from "@tanstack/react-query";

import { FilterBar } from "@/components/catalogue/filters/filter-bar";
import { ProductsList } from "@/components/catalogue/products/products-list";

import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <FilterBar />
      <ProductsList />
    </main>
  );
}
