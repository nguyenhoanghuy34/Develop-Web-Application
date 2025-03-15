import { Col, Row, Container } from "reactstrap";
import SidebarHomepage from "./SidebarHomepage/SidebarHomepage";
import ProductView from "../HomepageNav/ListProduct/ListProduct";
import UploadProduct from "../HomepageNav/UpToSale/UpToSale";
import OrderManagement from "../HomepageNav/GetOrder/GetOrder";
import Promotions from "../HomepageNav/FlashSale/FlashSale";
import ReviewProduct from "../HomepageNav/Evaluation/Evaluation";
import ReviewContainer from "./Evaluation/ReviewContainer";
import { Routes, Route, Navigate } from "react-router-dom";
import "./HomepageNav.scss";

function HomepageNav() {
  return (
    <Container fluid className="homepage-nav-container">
      <Row>
        <Col xs="12" md="3" className="sidebar-container">
          <SidebarHomepage />
        </Col>
        <Col xs="12" md="9" className="content-container">
          <Container className="bg-light" style={{ borderRadius: "10px" }}>
            <Routes>
              <Route path="*" element={<Navigate to="/home/products" />} />
              <Route path="products" element={<ProductView />} />
              <Route path="upload-products" element={<UploadProduct />} />
              <Route path="view-orders" element={<OrderManagement />} />
              <Route path="flash-sale" element={<Promotions />} />
              <Route path="review-products" element={<ReviewContainer />} />
            </Routes>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default HomepageNav;
