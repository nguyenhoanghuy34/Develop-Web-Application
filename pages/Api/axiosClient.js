// src/axiosClient.js
import axios from "axios";

// Mã JWT của bạn
const authToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzJkMDUyMWQ1M2MzY2M5YmE0ZDU2OTIiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MzExMzU4MzQsImV4cCI6MTczMTIyMjIzNH0.koc4HTdeQs2a8t9w83fz7fqRnqkW_7TFGeXOXJ_rsVE";

// Tạo một instance của axios với cấu hình mặc định
const axiosClient = axios.create({
  baseURL: "http://localhost:1234",
  // baseURL: "https://toy-kingdom-backend.onrender.com", // Địa chỉ API backend của bạn
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${authToken}`, // Thêm mã xác thực vào header
  },
});

export default axiosClient;
