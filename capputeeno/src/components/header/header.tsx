"use client";

import { Saira_Stencil_One } from "next/font/google";

import { CartControl } from "../controllers/cart-control";
import { PrimaryInputWSeachIcon } from "./primary-input";

import { useFilter } from "@/hooks/useFilter";

import { styled } from "styled-components";

const sairaStencil = Saira_Stencil_One({
  weight: ["400"],
  subsets: ["latin"],
});

interface HeaderProps {}

const TagHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 24px;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
  }

  @media (min-width: ${(props) => props.theme.desktopBreakpoint}) {
    padding: 20px 160px;
  }
`;

const CapputeenoLogo = styled.a`
  color: var(--logo-color);
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;

  @media (min-width: ${(props) => props.theme.tabletBreakpoint}) {
    font-size: 24px;
  }

  @media (min-width: ${(props) => props.theme.desktopBreakpoint}) {
    font-size: 40px;
  }
`;

export function Header(props: HeaderProps) {
  const { search, setSearch } = useFilter();
  return (
    <TagHeader>
      <CapputeenoLogo className={sairaStencil.className}>
        Capputeeno
      </CapputeenoLogo>
      <div>
        <PrimaryInputWSeachIcon
          value={search}
          handleChange={setSearch}
          placeholder="Procurando por algo específico?"
        />
        <CartControl />
      </div>
    </TagHeader>
  );
}
