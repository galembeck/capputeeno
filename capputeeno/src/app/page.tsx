"use client";

import { FilterBar } from "@/components/catalogue/filters/filter-bar";
import { ProductsList } from "@/components/catalogue/products/products-list";

import { DefaultPageLayout } from "@/components/default-page-layout";

import { styled } from "styled-components";

const PageWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Home() {
  return (
    <DefaultPageLayout>
      <PageWrapper>
        <FilterBar />
        <ProductsList />
      </PageWrapper>
    </DefaultPageLayout>
  );
}
