import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import ReviewProduct from "./Evaluation"; // Đảm bảo ReviewProduct vẫn giữ nguyên
import { getAllProducts } from "../../Api/product"; // Import API để lấy sản phẩm
import "./ReviewContainer.scss";

const ReviewContainer = () => {
  const [products, setProducts] = useState([]); // State để lưu danh sách sản phẩm

  useEffect(() => {
    // Gọi API khi component mount
    const fetchProducts = async () => {
      try {
        const productsData = await getAllProducts();
        if (productsData.products && Array.isArray(productsData.products)) {
          setProducts(productsData.products);
        } else {
          console.error("Dữ liệu trả về không đúng cấu trúc:", productsData);
        }
      } catch (error) {
        console.error("Không thể tải sản phẩm:", error);
      }
    };
    fetchProducts();
  }, []); // Chạy một lần khi component được mount

  return (
    <Container className="pt-3 pb-3  bg-light">
      <Row>
        {products.length > 0 ? (
          products.map((product) => (
            <Col md={12} key={product.id}>
              {" "}
              {/* Thêm key duy nhất từ product.id */}
              <ReviewProduct product={product} />{" "}
              {/* Truyền mỗi product vào ReviewProduct */}
            </Col>
          ))
        ) : (
          <Col>
            <p>Không có sản phẩm để hiển thị.</p>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default ReviewContainer;
