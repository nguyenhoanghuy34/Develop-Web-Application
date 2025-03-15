import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import "./FlashSale.scss";

const FlashSale = () => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal(!modal);

  const handlePublish = () => {
    alert("Flash Sale đã được tạo!");
    toggleModal();
  };

  return (
    <Container className="flash-sale-container">
      <h2 className="text-center">
        <strong>FLASH SALE</strong>
      </h2>
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label for="startDate">Ngày bắt đầu</Label>
            <Input type="date" id="startDate" />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="endDate">Ngày kết thúc</Label>
            <Input type="date" id="endDate" />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label for="flashSaleCode">Mã Flash Sale</Label>
            <Input type="text" id="flashSaleCode" />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="discount">Phần trăm giảm giá (%)</Label>
            <Input type="number" id="discount" />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <FormGroup>
            <Label for="content">Nội dung</Label>
            <Input type="textarea" id="content" />
          </FormGroup>
        </Col>
      </Row>
      <Button color="primary" onClick={toggleModal}>
        Tạo Flash Sale
      </Button>

      {/* Modal xác nhận đăng */}
      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>XÁC NHẬN</ModalHeader>
        <ModalBody>Bạn có chắc chắn muốn tạo Flash Sale này không?</ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={handlePublish}>
            Đăng
          </Button>
          <Button color="secondary" onClick={toggleModal}>
            Hủy
          </Button>
        </ModalFooter>
      </Modal>
    </Container>
  );
};

export default FlashSale;
