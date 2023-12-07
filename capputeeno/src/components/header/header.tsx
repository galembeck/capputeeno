"use client";

import { Saira_Stencil_One } from "next/font/google";

import { CartControl } from "../cart-control";
import { PrimaryInputWSeachIcon } from "./primary-input";

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
  padding: 20px 160px;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
  }
`;

const CapputeenoLogo = styled.a`
  color: var(--logo-color);
  font-weight: 400;
  font-size: 40px;
  line-height: 150%;
`;

export function Header(props: HeaderProps) {
  return (
    <TagHeader>
      <CapputeenoLogo className={sairaStencil.className}>
        Capputeeno
      </CapputeenoLogo>
      <div>
        <PrimaryInputWSeachIcon placeholder="Procurando por algo específico?" />
        <CartControl />
      </div>
    </TagHeader>
  );
}
