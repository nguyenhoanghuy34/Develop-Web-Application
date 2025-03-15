import axiosClient from "../Api/axiosClient"; // Import axiosClient

// Gửi thông tin sản phẩm (bao gồm tên, giá, mô tả, độ tuổi) đến API
const uploadProductDetails = async (productDetails) => {
  const { name, price, description, suitableAge } = productDetails;

  const productData = {
    attributes: {
      name,
      price,
      description,
      suitableAge,
    },
  };

  try {
    const response = await axiosClient.post(
      "admin/product/create",
      productData
    );
    console.log("Sản phẩm đã được tạo:", response.data);
    return response.data; // Trả về thông tin sản phẩm vừa được tạo
  } catch (error) {
    console.error("Lỗi khi tạo sản phẩm:", error);
    alert("Có lỗi khi tạo sản phẩm!");
  }
};

export { uploadProductDetails };
