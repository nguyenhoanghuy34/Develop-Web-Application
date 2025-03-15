import React, { useState, useEffect } from "react";
import { Container, Col, Row, Card, CardBody, CardTitle } from "reactstrap";
import RevenueBarChart from "../../ChartJS/Overview/Revenue";
import { getAllProducts } from "../../../../Api/product"; // Giả sử hàm getAllProducts đã được định nghĩa ở đây

import "./OverViewDash.scss";

const OverViewDash = () => {
  const [productData, setProductData] = useState([]);
  const [productData1, setProductData1] = useState([]);
  const [productData2, setProductData2] = useState([]);
  const [revenue1, setRevenue1] = useState(0); // Doanh thu tháng này
  const [revenue2, setRevenue2] = useState(0); // Doanh thu tháng trước
  const [revenueChange, setRevenueChange] = useState(0); // Tỷ lệ thay đổi

  // Gọi API và lưu vào state khi component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllProducts();
        if (data && Array.isArray(data.products)) {
          setProductData(data.products); // Lưu vào state
          console.log(data.products.length);

          // Chia sản phẩm thành 2 mảng
          const halfLength = Math.ceil(data.products.length / 2);
          const productData1 = data.products.slice(0, halfLength); // Sản phẩm tháng này
          const productData2 = data.products.slice(halfLength); // Sản phẩm tháng trước

          setProductData1(productData1);
          setProductData2(productData2);

          // Tính doanh thu cho từng mảng
          const revenue1 = productData1.reduce((total, product) => {
            return total + product.price * product.totalSold;
          }, 0);
          const revenue2 = productData2.reduce((total, product) => {
            return total + product.price * product.totalSold;
          }, 0);

          // Cập nhật doanh thu vào state
          setRevenue1(revenue1);
          setRevenue2(revenue2);

          // Tính phần trăm thay đổi doanh thu
          if (revenue2 > 0) {
            const change = ((revenue1 - revenue2) / revenue2) * 100;
            setRevenueChange(change);
          }
        } else {
          console.warn("Dữ liệu không hợp lệ");
        }
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu sản phẩm:", error);
      }
    };

    fetchData();
  }, []); // Chỉ chạy 1 lần khi component mount

  return (
    <div style={{ padding: "20px" }}>
      <hr className="my-3 text-danger" />
      <Container>
        {/* Doanh thu */}
        <Row>
          <Col xs="12" md="4" lg="3">
            <Card className="card-stats mb-4 mb-xl-0">
              <CardBody>
                <Row>
                  <div className="col">
                    <CardTitle
                      tag="h5"
                      className="text-uppercase text-muted mb-0"
                    >
                      <i className="fas fa-dollar-sign mr-2" />
                      <span> DOANH THU</span>
                    </CardTitle>
                    <span className="h6 font-weight-bold mb-0">
                      {revenue1.toLocaleString()} VNĐ
                    </span>
                  </div>
                </Row>
                <p className="mt-2 mb-0 text-muted text-sm">
                  <span
                    className={
                      revenueChange >= 0 ? "text-success" : "text-danger"
                    }
                    mr-2
                  >
                    <i
                      className={
                        revenueChange >= 0
                          ? "fas fa-arrow-up"
                          : "fas fa-arrow-down"
                      }
                    />
                    {Math.abs(revenueChange).toFixed(2)}%
                  </span>
                  <br />
                  <span className="text-nowrap">
                    Doanh thu tháng trước:
                    <br /> {revenue2.toLocaleString()} VNĐ
                  </span>
                </p>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" md="8" lg="9">
            <Container className="chart-container">
              <RevenueBarChart />
            </Container>
          </Col>
        </Row>
        <hr className="my-3 text-danger" />
      </Container>
    </div>
  );
};

export default OverViewDash;
