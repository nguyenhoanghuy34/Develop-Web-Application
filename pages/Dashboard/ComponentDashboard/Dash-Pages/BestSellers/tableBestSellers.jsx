import React, { useState, useEffect } from "react";
import { Table, Container, Row, Col } from "reactstrap";
import "../BestSellers/styleBestSellers.scss";
import { getAllProducts } from "../../../../Api/product";

const TableBestSellers = () => {
  // Sử dụng state để lưu trữ dữ liệu sản phẩm từ API
  const [productData, setProductData] = useState([]);
  const [selectedProductIndex, setSelectedProductIndex] = useState(null);
  const [sortBy, setSortBy] = useState("revenue"); // Mặc định sắp xếp theo doanh thu

  // Hàm lấy dữ liệu từ API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllProducts();
        if (response && Array.isArray(response.products)) {
          setProductData(response.products);
        } else {
          setProductData([]);
        }
      } catch (error) {
        console.error("Lỗi khi lấy danh sách sản phẩm:", error);
      }
    };
    fetchData();
  }, []);

  // Hàm format tiền theo đơn vị VNĐ
  const formatCurrency = (value) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(value);
  };

  // Hàm tính doanh thu
  const calculateRevenue = (price, totalSold) => {
    return price * totalSold;
  };

  // Hàm xử lý sự kiện khi nhấn vào hàng của một sản phẩm
  const handleRowClick = (index) => {
    setSelectedProductIndex(selectedProductIndex === index ? null : index);
  };

  // Hàm sắp xếp dữ liệu theo doanh thu hoặc số lượng
  const sortedProductData = [...productData].sort((a, b) => {
    if (sortBy === "revenue") {
      return (
        calculateRevenue(b.price, b.totalSold) -
        calculateRevenue(a.price, a.totalSold)
      );
    } else if (sortBy === "quantity") {
      return b.totalSold - a.totalSold;
    }
    return 0;
  });

  return (
    <div className="table-best-sellers">
      <Container>
        <h1 className="title">TOP 10 SẢN PHẨM BÁN CHẠY NHẤT</h1>

        {/* Nút Sắp xếp */}
        <div className="sorting-options">
          <button
            className={`sort-btn ${sortBy === "revenue" ? "active" : ""}`}
            onClick={() => setSortBy("revenue")}
          >
            Sắp xếp theo Doanh thu
          </button>
          <button
            className={`sort-btn ${sortBy === "quantity" ? "active" : ""}`}
            onClick={() => setSortBy("quantity")}
          >
            Sắp xếp theo Số lượng bán ra
          </button>
        </div>

        <Table bordered hover responsive className="table">
          <thead>
            <tr>
              <th>STT</th>
              <th>Tên sản phẩm</th>
              <th>Giá bán</th>
              <th>Số lượng đã bán</th>
              <th>Doanh thu</th>
            </tr>
          </thead>
          <tbody>
            {sortedProductData.map((product, index) => (
              <React.Fragment key={product._id}>
                <tr onClick={() => handleRowClick(index)}>
                  <td>{index + 1}</td>
                  <td>{product.name}</td>
                  <td>{formatCurrency(product.price)}</td>
                  <td>{product.totalSold}</td>
                  <td>
                    {formatCurrency(
                      calculateRevenue(product.price, product.totalSold)
                    )}
                  </td>
                </tr>
                {/* Hiển thị chi tiết sản phẩm nếu sản phẩm được chọn */}
                {selectedProductIndex === index && (
                  <tr>
                    <td colSpan="5">
                      <div className="product-details">
                        <Row>
                          <Col md="9">
                            <Row>
                              <strong>Nhãn hàng: {product.brand}</strong>
                            </Row>
                            <Row>
                              <strong>Category: {product.category}</strong>
                            </Row>
                            <Row>
                              <p>
                                <strong>Hàng trong kho:</strong> {product.stock}
                              </p>
                            </Row>
                            <Row>
                              <p>
                                <strong>Mô tả:</strong> {product.description}
                              </p>
                            </Row>
                          </Col>
                          <Col md="3">
                            <img
                              src={
                                product.images && product.images[0]?.buffer
                                  ? `data:${product.images[0].mimetype};base64,${product.images[0].buffer}`
                                  : "https://via.placeholder.com/150"
                              }
                              alt={product.name}
                              style={{ width: "100%", height: "auto" }}
                            />
                          </Col>
                        </Row>
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default TableBestSellers;
