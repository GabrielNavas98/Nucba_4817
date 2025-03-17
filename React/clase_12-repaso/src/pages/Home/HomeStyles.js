import styled from "styled-components";

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  padding: 20px;
`;

export const ProductCard = styled.div`
  border: 1px solid #ddd;
  padding: 10px;
  text-align: center;
  background: #fff;
  border-radius: 5px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

export const Image = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
`;