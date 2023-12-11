import { useRouter } from "next/navigation";

import { ReturnIcon } from "../icons/return-icon";

import { styled } from "styled-components";

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  background: transparent;
  border: none;
  cursor: pointer;

  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  color: var(--secondary-text);
`;

interface ButtonProps {
  navigate: string;
}

export function ReturnButton({ navigate }: ButtonProps) {
  const router = useRouter();

  const handleNavigate = () => {
    router.push(navigate);
  };

  return (
    <Button onClick={handleNavigate}>
      <ReturnIcon />
      Voltar
    </Button>
  );
}
