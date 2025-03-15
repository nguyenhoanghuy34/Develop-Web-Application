import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "../../ChartJS/chart.scss";
import { getAllProducts } from "../../../../Api/product"; // Giả sử API được import đúng

// Đăng ký các thành phần biểu đồ
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const RevenueBarChart = () => {
  const [products, setProducts] = useState([]); // Dữ liệu sản phẩm sẽ được lưu vào state
  const [revenue1, setRevenue1] = useState([]); // Khai báo state revenue1 để lưu 5 sản phẩm đầu tiên
  const [weeklyRevenue, setWeeklyRevenue] = useState([0, 0, 0, 0]); // Lưu doanh thu theo tuần

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllProducts(); // Gọi API để lấy dữ liệu sản phẩm
        if (data && data.products && Array.isArray(data.products)) {
          setProducts(data.products); // Lưu mảng sản phẩm vào state

          // Lấy ra 5 sản phẩm đầu tiên từ mảng products
          const top5Products = data.products.slice(0, 5); // Lấy 5 sản phẩm đầu tiên
          setRevenue1(top5Products); // Lưu vào mảng revenue1

          // Tính doanh thu cho từng tuần
          const revenue = calculateRevenue(top5Products); // Tính doanh thu cho 5 sản phẩm
          setWeeklyRevenue(revenue); // Cập nhật doanh thu cho các tuần
        }
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu sản phẩm:", error);
      }
    };

    fetchData();
  }, []);

  const calculateRevenue = (top5Products) => {
    // Tính doanh thu cho từng tuần
    const week1Revenue =
      (top5Products[0]?.price || 0) * (top5Products[0]?.totalSold || 0) +
      (top5Products[1]?.price || 0) * (top5Products[1]?.totalSold || 0);
    const week2Revenue =
      (top5Products[2]?.price || 0) * (top5Products[2]?.totalSold || 0);
    const week3Revenue =
      (top5Products[3]?.price || 0) * (top5Products[3]?.totalSold || 0);
    const week4Revenue =
      (top5Products[4]?.price || 0) * (top5Products[4]?.totalSold || 0);

    return [week1Revenue, week2Revenue, week3Revenue, week4Revenue];
  };

  console.log(weeklyRevenue); // Kiểm tra dữ liệu doanh thu theo tuần

  // Dữ liệu cho biểu đồ
  const data = {
    labels: ["Tuần 1", "Tuần 2", "Tuần 3", "Tuần 4"],
    datasets: [
      {
        label: "Doanh thu (VNĐ)",
        data: weeklyRevenue, // Sử dụng doanh thu đã tính cho từng tuần
        backgroundColor: [
          "rgba(255, 99, 132, 0.9)",
          "rgba(54, 162, 235, 0.9)",
          "rgba(255, 206, 86, 0.9)",
          "rgba(75, 192, 192, 0.9)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        padding: "20px",
        borderRadius: "8px",
      }}
    >
      <h2 className="title">BIỂU ĐỒ DOANH THU THÁNG</h2>
      <br />
      <Bar data={data} options={options} />
    </div>
  );
};

export default RevenueBarChart;
