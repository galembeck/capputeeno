import { useRouter } from "next/navigation";

import { Divider } from "@/components/divider";

import { formatPrice } from "@/utils/format-price";

import { styled } from "styled-components";

interface ProductCardProps {
  image: string;
  title: string;
  price: number;
  id: string;
}

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  cursor: pointer;

  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(10px);
  border-radius: 0 0 6px 6px;

  width: 256px;

  img {
    width: 256px;
    height: 300px;
    border-radius: 6px 6px 0 0;
  }

  h3 {
    font-weight: 300;
    font-size: 16px;
    line-height: 150%;
    color: var(--text-dark-2);
  }

  p {
    font-weight: 600;
    font-size: 14px;
    line-height: 150%;
    color: var(--shapes-dark);
  }

  div {
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;

    padding: 8px 12px;
    width: 100%;
  }
`;

export function ProductCard(props: ProductCardProps) {
  const router = useRouter();
  const handleNavigate = () => {
    router.push("/product?id=" + props.id);
  };

  const price = formatPrice(props.price);

  return (
    <Card onClick={handleNavigate}>
      <img src={props.image} />
      <div>
        <h3>{props.title}</h3>
        <Divider />
        <p>{price}</p>
      </div>
    </Card>
  );
}
