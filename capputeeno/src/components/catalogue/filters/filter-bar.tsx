"use client";

import { FilterByType } from "./filter-by-type";
import { FilterByPriority } from "./filter-by-priority";

import { styled } from "styled-components";

interface FilterBarProps {}

const FilterContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: start;
  justify-content: space-between;
`;

export function FilterBar(props: FilterBarProps) {
  return (
    <FilterContainer>
      <FilterByType />
      <FilterByPriority />
    </FilterContainer>
  );
}
