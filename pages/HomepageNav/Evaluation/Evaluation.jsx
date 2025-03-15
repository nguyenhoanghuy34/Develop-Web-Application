import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Container,
  Col,
  Row,
} from "reactstrap";
import "./Evaluation.scss";
import ReviewCard from "./ReviewCard/ReviewCard"; // Giả sử ReviewCard là component hiển thị đánh giá

const ReviewProduct = ({ product }) => {
  const [modal, setModal] = useState(false); // Trạng thái modal
  const toggleModal = () => setModal(!modal); // Hàm toggle modal

  return (
    <div className="product-card bg-white">
      <Container>
        <Row>
          <Col>
            <Row>
              <strong>Tên hàng hóa: {product.name}</strong>
            </Row>
            <Row>
              <p className="product-description">
                <strong>Mô tả:</strong> {product.description}
              </p>
            </Row>
          </Col>
          {/* Cột hình ảnh chỉ chiếm 1/4 chiều rộng */}
          <Col xs={3}>
            <img
              src={
                product.images && product.images[0]?.buffer
                  ? `data:${product.images[0].mimetype};base64,${product.images[0].buffer}`
                  : "https://via.placeholder.com/150"
              }
              alt={product.name}
              className="product-image rounded"
            />
          </Col>
        </Row>
        <Row className="mt-3">
          <Button color="primary" onClick={toggleModal}>
            Xem đánh giá
          </Button>
        </Row>
      </Container>

      {/* Modal hiển thị đánh giá */}
      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Đánh giá sản phẩm</ModalHeader>
        <ModalBody>
          <h5>{product.name}</h5>
          <ReviewCard /> {/* Hiển thị đánh giá ở đây */}
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggleModal}>
            Đóng
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ReviewProduct;
