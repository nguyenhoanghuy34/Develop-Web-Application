import React from "react";
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Goods = () => {
  const data = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "SỐ LƯỢNG HÀNG HÓA",
        data: [50, 700, 1290, 2230],
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)", // Màu cột cho Week 1
          "rgba(54, 162, 235, 0.5)", // Màu cột cho Week 2
          "rgba(255, 206, 86, 0.5)", // Màu cột cho Week 3
          "rgba(75, 192, 192, 0.5)", // Màu cột cho Week 4
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1,
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

  return (
    <div>
      <h2 className="title">BIỂU ĐỒ SỐ LƯỢNG HÀNG HÓA BÁN ĐƯỢC</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default Goods;
