import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import "../../ChartJS/chart.scss";

ChartJS.register(ArcElement, Tooltip, Legend);

const DetailOfQuantity = () => {
  const data = {
    labels: ["Sản phẩm A", "Sản phẩm B", "Sản phẩm C", "Sản phẩm D"],
    datasets: [
      {
        label: "SỐ LƯỢNG SẢN PHẨM BÁN ĐƯỢC",
        data: [120, 150, 80, 200],
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
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
      <h2 className="title">BIỂU ĐỒ SẢN PHẨM BÁN ĐƯỢC</h2>
      <Pie data={data} options={options} />
    </div>
  );
};

export default DetailOfQuantity;
