import React, { useState, useEffect } from "react";
import { Container, Col, Row } from "reactstrap";
import { AllProductsCart } from "../../../../Api/getAllProduct"; // Đảm bảo đường dẫn đúng
import "./ProductCard-Cart.scss";

const ProductCardCart = () => {
  const [product, setProduct] = useState({
    name: "",
    images: "https://via.placeholder.com/150", // ảnh mặc định
    quantity: 2, // Thêm số lượng giả lập
    price: 500000, // Giá giả lập (VND)
  });

  useEffect(() => {
    // Gọi API khi component được mount
    const fetchProduct = async () => {
      try {
        const productData = await AllProductsCart(); // Lấy sản phẩm đầu tiên từ API
        console.log("Sản phẩm đầu tiên:", productData); // Kiểm tra sản phẩm đã lấy được
        if (productData) {
          setProduct({
            name: productData.name, // Lấy tên sản phẩm
            images: productData.images || "https://via.placeholder.com/150", // Sử dụng ảnh mặc định nếu không có ảnh
            quantity: 2, // Số lượng giả lập
            price: 500000, // Giá giả lập (VND)
          });
        }
      } catch (error) {
        console.error("Lỗi khi lấy sản phẩm:", error);
      }
    };

    fetchProduct();
  }, []); // Chạy một lần khi component mount

  return (
    <Container className="product-card-cart">
      <Row className="product-card-cart__row">
        <Col xs="8" className="product-card-cart__col">
          <Row className="product-card-cart__name">
            <Container>{product.name}</Container>
          </Row>
          <Row className="product-card-cart__quantity">
            <Container> Số lượng: {product.quantity}</Container>
          </Row>
          <Row className="product-card-cart__price">
            <Container> Giá: {product.price.toLocaleString()} VND</Container>
          </Row>
        </Col>
        <Col xs="4">
          <img
            className="product-card-cart__image"
            src={
              product.images && product.images[0]?.buffer
                ? `data:${product.images[0].mimetype};base64,${product.images[0].buffer}`
                : "https://via.placeholder.com/150" // Hình ảnh mặc định nếu không có ảnh sản phẩm
            }
            alt={product.name}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default ProductCardCart;
