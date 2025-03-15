import React, { useState } from "react";
import axiosClient from "../../Api/axiosClient"; // Import axiosClient để thực hiện các yêu cầu API
import {
  Container,
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap"; // Import các component từ Reactstrap để xây dựng giao diện
import "./UploadProduct.scss"; // Import file SCSS để tùy chỉnh giao diện

// Component UploadProduct dùng để đăng bán sản phẩm
const UploadProduct = () => {
  // State lưu trữ thông tin sản phẩm từ input
  const [productDetails, setProductDetails] = useState({
    name: "", // Tên sản phẩm
    price: "", // Giá sản phẩm
    description: "", // Mô tả sản phẩm
    suitableAge: "", // Độ tuổi phù hợp
  });

  // Hàm handleChange để cập nhật giá trị của các trường input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductDetails({
      ...productDetails,
      [name]: value, // Cập nhật trường tương ứng trong productDetails
    });
  };

  // Hàm uploadProductDetails để gửi thông tin sản phẩm (không bao gồm ảnh) đến API
  const uploadProductDetails = async () => {
    const productData = {
      name: productDetails.name,
      price: productDetails.price,
      description: productDetails.description,
      suitableAge: productDetails.suitableAge,
    };

    console.log("Dữ liệu sản phẩm gửi lên:", productData); // In dữ liệu sản phẩm trước khi gửi

    try {
      console.log(productData);

      const response = await axiosClient.post(
        "/admin/product/create",
        (attributes = productData)
      );
      console.log("Sản phẩm đã được tạo:", response.data);
      return response.data; // Trả về dữ liệu sản phẩm vừa được tạo
    } catch (error) {
      console.error("Lỗi khi tạo sản phẩm:", error);
      alert("Có lỗi khi tạo sản phẩm!");
    }
  };

  // Hàm handleSubmit để xử lý khi người dùng nhấn nút Đăng Bán
  const handleSubmit = async (e) => {
    e.preventDefault(); // Ngăn chặn reload trang

    // Kiểm tra các trường bắt buộc
    if (
      !productDetails.name ||
      !productDetails.price ||
      !productDetails.description
    ) {
      alert("Vui lòng điền đầy đủ thông tin!"); // Thông báo nếu chưa điền đủ thông tin
      return;
    }

    // Gọi hàm uploadProductDetails để tạo sản phẩm
    const productData = await uploadProductDetails();

    if (productData) {
      alert("Sản phẩm đã được đăng bán!");
    } else {
      alert("Có lỗi khi tạo sản phẩm!");
    }
  };

  // Giao diện của component UploadProduct
  return (
    <Container className="upload-product-container">
      <h2 className="text-center">Đăng Bán Sản Phẩm</h2>
      <Row>
        <Col md={6} className="mx-auto">
          {/* Nhập tên sản phẩm */}
          <FormGroup>
            <Label for="productName">
              <i className="fas fa-box"></i> Tên sản phẩm
            </Label>
            <Input
              type="text"
              id="productName"
              name="name"
              placeholder="Nhập tên sản phẩm"
              value={productDetails.name}
              onChange={handleChange}
            />
          </FormGroup>
          {/* Nhập giá sản phẩm */}
          <FormGroup>
            <Label for="productPrice">
              <i className="fas fa-dollar-sign"></i> Giá
            </Label>
            <Input
              type="number"
              id="productPrice"
              name="price"
              placeholder="Nhập giá sản phẩm"
              value={productDetails.price}
              onChange={handleChange}
            />
          </FormGroup>
          {/* Nhập mô tả sản phẩm */}
          <FormGroup>
            <Label for="productDescription">
              <i className="fas fa-info-circle"></i> Mô tả
            </Label>
            <Input
              type="textarea"
              id="productDescription"
              name="description"
              placeholder="Nhập mô tả sản phẩm"
              value={productDetails.description}
              onChange={handleChange}
            />
          </FormGroup>
          {/* Nhập độ tuổi phù hợp cho sản phẩm */}
          <FormGroup>
            <Label for="ageAppropriate">
              <i className="fas fa-child"></i> Độ tuổi phù hợp
            </Label>
            <Input
              type="number"
              id="ageAppropriate"
              name="suitableAge"
              placeholder="Nhập độ tuổi phù hợp"
              value={productDetails.suitableAge}
              onChange={handleChange}
            />
          </FormGroup>
          {/* Nút Đăng Bán */}
          <Button color="primary" onClick={handleSubmit}>
            Đăng Bán
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default UploadProduct;
