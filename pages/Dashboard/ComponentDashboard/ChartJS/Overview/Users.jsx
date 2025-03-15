import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "../../ChartJS/chart.scss";

// Đăng ký các thành phần cần thiết
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Users = () => {
  const data = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "SỐ LƯỢNG NGƯỜI DÙNG THÁNG",
        data: [800, 900, 1500, 1550],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.3,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
      },
    },
  };

  // return <Line data={data} options={options} />;
  return (
    <div>
      <h2 className="title">BIỂU ĐỒ SỐ LƯỢNG NGƯỜI DÙNG</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default Users;
