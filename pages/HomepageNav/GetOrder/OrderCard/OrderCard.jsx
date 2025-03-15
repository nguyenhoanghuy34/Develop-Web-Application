import "./OrderCard.scss";
import React, { useState } from "react";
import {
  Col,
  Row,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import ProductCardCart from "../OrderCart/ProductCard-Cart/ProductCard-Cart";

const OrderCard = ({ user }) => {
  // Nhận thông tin người dùng qua props
  const [modal, setModal] = useState(false); // Modal state

  // Hàm toggle modal
  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div className="order-card">
      <Row className="d-flex flex-column flex-md-row">
        <Col className="d-flex align-items-center mb-2">
          <i className="fas fa-user"></i>
          <strong> Tên khách hàng:</strong>{" "}
          {user ? user.fullName || "Chưa cập nhật" : "Đang tải..."}
        </Col>
        <Col className="d-flex align-items-center mb-2">
          <i className="fas fa-phone"></i>
          <strong> Số điện thoại:</strong>{" "}
          {user ? user.phone || "Chưa cập nhật" : "Đang tải..."}
        </Col>
      </Row>
      <Row>
        <Col>
          <i className="fas fa-map-marker-alt"></i>
          <strong> Địa chỉ:</strong>{" "}
          {user ? user.address || "Chưa cập nhật" : "Đang tải..."}
        </Col>
      </Row>
      <Row>
        <Col>
          <i className="fas fa-receipt"></i>
          <strong> Mã đơn:</strong>{" "}
          {user ? user._id || "Chưa cập nhật" : "Đang tải..."}
        </Col>
      </Row>
      <Row>
        <Col>
          <i className="fas fa-calendar-alt"></i>
          <strong> Ngày đặt hàng:</strong> 23/10/2024
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <Button color="primary" block onClick={toggleModal}>
            Xem Chi Tiết
          </Button>
        </Col>
      </Row>

      {/* Modal */}
      <Modal isOpen={modal} toggle={toggleModal} className="order-modal">
        <ModalHeader toggle={toggleModal}>Chi tiết đơn hàng</ModalHeader>
        <ModalBody>
          <ProductCardCart />
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggleModal}>
            Duyệt
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default OrderCard;
