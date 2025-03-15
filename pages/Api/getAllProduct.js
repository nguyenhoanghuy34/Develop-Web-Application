import axiosClient from "./axiosClient";

// Lấy tất cả sản phẩm và chỉ trả về sản phẩm đầu tiên
const AllProductsCart = async () => {
  try {
    const response = await axiosClient.get("/admin/product/findAll");
    console.log("Dữ liệu trả về từ API:", response); // Kiểm tra cấu trúc đầy đủ của response

    // Nếu dữ liệu có thuộc tính `products` chứa mảng sản phẩm
    if (
      response.data &&
      Array.isArray(response.data.products) &&
      response.data.products.length > 0
    ) {
      console.log("Sản phẩm đầu tiên:", response.data.products[0]);
      return response.data.products[0]; // Trả về sản phẩm đầu tiên
    } else {
      console.log("Không có sản phẩm nào");
      return null;
    }
  } catch (error) {
    console.error("Lỗi khi lấy danh sách sản phẩm:", error);
    throw error;
  }
};

export { AllProductsCart };
