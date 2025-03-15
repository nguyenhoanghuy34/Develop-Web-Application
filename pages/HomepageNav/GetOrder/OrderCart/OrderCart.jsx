import "./OrderCart.scss";
import React, { useState } from "react";
import { Container } from "reactstrap";
import ProductCardCart from "../OrderCart/ProductCard-Cart/ProductCard-Cart";

const OrderCart = () => {
  return (
    <Container>
      <ProductCardCart />
    </Container>
  );
};

export default OrderCart;
