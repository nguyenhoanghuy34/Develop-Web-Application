import React, { useEffect, useState } from "react";
import { Container, Row, Col, Spinner } from "reactstrap";
import { getAllProducts } from "../../Api/product";
import CardProduct from "../ListProduct/CardProduct/CardProduct";
import "../ListProduct/styleListProducts.scss";

// Component ProductView để hiển thị danh sách sản phẩm
const ProductView = () => {
  // Khởi tạo state products để lưu trữ danh sách sản phẩm, ban đầu là mảng rỗng
  const [products, setProducts] = useState([]);
  // Khởi tạo state loading để theo dõi trạng thái tải dữ liệu, ban đầu là true (đang tải)
  const [loading, setLoading] = useState(true);

  // useEffect để thực hiện tải dữ liệu khi component được render lần đầu
  useEffect(() => {
    // Hàm fetchProducts để lấy danh sách sản phẩm từ API
    const fetchProducts = async () => {
      try {
        // Gọi hàm API getAllProducts để lấy dữ liệu
        const response = await getAllProducts();
        // Kiểm tra cấu trúc dữ liệu trả về, nếu hợp lệ thì cập nhật state products
        if (response.products && Array.isArray(response.products)) {
          setProducts(response.products);
        } else {
          console.error("Dữ liệu trả về không đúng cấu trúc:", response);
        }
      } catch (error) {
        // Nếu xảy ra lỗi trong quá trình tải, log lỗi ra console
        console.error("Lỗi khi tải sản phẩm:", error);
      } finally {
        // Kết thúc quá trình tải dữ liệu, cập nhật state loading thành false
        setLoading(false);
      }
    };
    // Gọi hàm fetchProducts
    fetchProducts();
  }, []); // Mảng phụ thuộc rỗng, useEffect chỉ chạy một lần khi component mount

  // Hàm xử lý khi xóa sản phẩm thành công
  const handleDeleteSuccess = (deletedProductId) => {
    // Cập nhật state products, lọc bỏ sản phẩm có _id trùng với deletedProductId
    setProducts(products.filter((product) => product._id !== deletedProductId));
  };

  // Hàm xử lý khi cập nhật sản phẩm thành công
  const handleUpdateSuccess = (updatedProduct) => {
    // Cập nhật state products, thay thế sản phẩm có _id trùng với updatedProduct._id bằng sản phẩm mới
    setProducts(
      products.map((product) =>
        product._id === updatedProduct._id ? updatedProduct : product
      )
    );
  };

  return (
    // Container bao bọc nội dung hiển thị của component
    <Container>
      {/* Tiêu đề danh sách sản phẩm */}
      <h2 className="title pt-3 pb-0">DANH SÁCH SẢN PHẨM</h2>
      <div className="pt-3 pb-3">
        {/* Kiểm tra nếu loading là true thì hiển thị Spinner, nếu không hiển thị danh sách sản phẩm */}
        {loading ? (
          // Vòng xoay tải khi dữ liệu đang được tải
          <div className="text-center">
            <Spinner color="primary" />
          </div>
        ) : (
          // Nếu đã tải xong, hiển thị danh sách sản phẩm
          <Row>
            {/* Kiểm tra nếu products là mảng và có ít nhất một sản phẩm thì render CardProduct cho mỗi sản phẩm */}
            {Array.isArray(products) && products.length > 0 ? (
              products.map((product) => (
                <Col key={product._id} md={4} className="mb-4">
                  {/* Gọi component CardProduct và truyền dữ liệu từng sản phẩm */}
                  <CardProduct
                    product={product}
                    onDeleteSuccess={handleDeleteSuccess}
                    onUpdateSuccess={handleUpdateSuccess}
                  />
                </Col>
              ))
            ) : (
              // Nếu không có sản phẩm nào, hiển thị thông báo
              <div className="text-center">Không có sản phẩm nào.</div>
            )}
          </Row>
        )}
      </div>
    </Container>
  );
};

export default ProductView;
