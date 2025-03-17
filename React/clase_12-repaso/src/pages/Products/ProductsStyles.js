import { Link } from "react-router-dom";
import styled from "styled-components";

export const ProductDetailContainer = styled.div`
  max-width: 600px;
  margin: auto;
  padding: 20px;
  text-align: center;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

export const Image = styled.img`
  width: 250px;
  height: 250px;
  object-fit: contain;
  margin-bottom: 10px;
`;

export const BackButton = styled(Link)`
  display: inline-block;
  margin-top: 20px;
  padding: 10px 15px;
  text-decoration: none;
  background: #007bff;
  color: white;
  border-radius: 5px;
  transition: background 0.3s;

  &:hover {
    background: #0056b3;
  }
`;