import React, { useState } from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import "../CardProduct/CardProduct.scss";
import { deleteProduct, updateProduct } from "../../../Api/product"; // Import hàm xóa và chỉnh sửa sản phẩm

const CardProduct = ({ product, onDeleteSuccess, onUpdateSuccess }) => {
  const [modal, setModal] = useState(false); // Modal xóa
  const [modalEdit, setModalEdit] = useState(false); // Modal chỉnh sửa
  const [editAttributes, setEditAttributes] = useState({
    name: product.name,
    price: product.price,
    description: product.description,
  });

  // Đổi trạng thái của modal xóa
  const toggle = () => setModal(!modal);
  // Đổi trạng thái của modal chỉnh sửa
  const toggleEdit = () => setModalEdit(!modalEdit);

  // Hàm xử lý xóa sản phẩm
  const handleDelete = async () => {
    try {
      const result = await deleteProduct([product._id]); // Xóa sản phẩm từ API
      console.log("Sản phẩm đã bị xóa:", result);
      onDeleteSuccess(product._id); // Gọi hàm callback sau khi xóa thành công
      toggle(); // Đóng modal xóa
    } catch (error) {
      console.error("Lỗi khi xóa sản phẩm:", error);
    }
  };

  // Hàm xử lý thay đổi dữ liệu chỉnh sửa khi người dùng nhập
  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditAttributes((prev) => ({ ...prev, [name]: value }));
  };

  // Hàm xử lý cập nhật sản phẩm
  const handleUpdate = async () => {
    // Kiểm tra nếu thông tin chưa thay đổi thì không cần gửi yêu cầu cập nhật
    if (
      editAttributes.name === product.name &&
      editAttributes.price === product.price &&
      editAttributes.description === product.description
    ) {
      toggleEdit(); // Đóng modal nếu không có thay đổi
      return;
    }

    try {
      const result = await updateProduct(product._id, editAttributes); // Cập nhật sản phẩm qua API
      console.log("Sản phẩm đã được cập nhật:", result);
      onUpdateSuccess(product._id, editAttributes); // Gọi hàm callback sau khi cập nhật thành công
      toggleEdit(); // Đóng modal chỉnh sửa
    } catch (error) {
      console.error("Lỗi khi cập nhật sản phẩm:", error);
    }
  };

  return (
    <Card className="card-container shadow-sm rounded">
      {/* Hình ảnh sản phẩm */}
      <CardImg
        top
        width="100%"
        src={
          product.images && product.images[0]?.buffer
            ? `data:${product.images[0].mimetype};base64,${product.images[0].buffer}`
            : "https://via.placeholder.com/150" // Hình ảnh mặc định nếu không có ảnh sản phẩm
        }
        alt={product.name}
        className="product-image"
      />

      <CardBody>
        <CardTitle tag="h5" className="product-name">
          {product.name}
        </CardTitle>
        <CardText>
          <strong>Giá: </strong>
          {product.price.toLocaleString()} VNĐ
        </CardText>
        <CardText className="description">
          <strong>Mô tả: </strong>
          {product.description.substring(0, 150)}...
        </CardText>
        <CardText>
          <strong>Độ tuổi phù hợp: </strong>
          {product.suitableAge}+
        </CardText>

        {/* Nút xóa và chỉnh sửa */}
        <div className="action-buttons">
          <Button color="danger" size="sm" onClick={toggle}>
            Xóa
          </Button>
          <Button color="warning" size="sm" onClick={toggleEdit}>
            Chỉnh sửa
          </Button>
        </div>
      </CardBody>

      {/* Modal xác nhận xóa */}
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Xác nhận xóa</ModalHeader>
        <ModalBody>
          Bạn có chắc chắn muốn xóa sản phẩm <strong>{product.name}</strong>{" "}
          không?
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Hủy
          </Button>
          <Button color="danger" onClick={handleDelete}>
            Xóa
          </Button>
        </ModalFooter>
      </Modal>

      {/* Modal chỉnh sửa */}
      <Modal isOpen={modalEdit} toggle={toggleEdit}>
        <ModalHeader toggle={toggleEdit}>Chỉnh sửa sản phẩm</ModalHeader>
        <ModalBody>
          <label>Tên sản phẩm:</label>
          <input
            type="text"
            name="name"
            value={editAttributes.name}
            onChange={handleEditChange}
            placeholder="Nhập tên sản phẩm"
          />
          <label>Giá:</label>
          <input
            type="number"
            name="price"
            value={editAttributes.price}
            onChange={handleEditChange}
            placeholder="Nhập giá sản phẩm"
          />
          <label>Mô tả:</label>
          <textarea
            name="description"
            value={editAttributes.description}
            onChange={handleEditChange}
            placeholder="Nhập mô tả sản phẩm"
          />
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggleEdit}>
            Hủy
          </Button>
          <Button color="primary" onClick={handleUpdate}>
            Cập nhật
          </Button>
        </ModalFooter>
      </Modal>
    </Card>
  );
};

export default CardProduct;
