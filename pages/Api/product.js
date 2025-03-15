// src/Api/product.js
import axiosClient from "./axiosClient";

// Lấy tất cả sản phẩm
const getAllProducts = async () => {
  try {
    const filter = {
      revenue: ["gt", 0],
    };
    const response = await axiosClient.get("/product/findAll", {
      params: filter,
    });
    console.log("Dữ liệu sản phẩm:", response.data); // In ra dữ liệu trả về
    return response.data;
  } catch (error) {
    console.error("Lỗi khi lấy danh sách sản phẩm:", error);
    throw error;
  }
};

// Lấy sản phẩm theo ID
const getProduct = async (id) => {
  try {
    console.log("Product ID:", id); // Kiểm tra giá trị ID
    const response = await axiosClient.get("/product/findOne", {
      params: { _id: id },
    });
    return response.data; // Trả về thông tin sản phẩm
  } catch (error) {
    console.error("Lỗi khi lấy sản phẩm:", error);
    throw error;
  }
};

// Xóa sản phẩm theo ID
const deleteProduct = async (_ids) => {
  try {
    const response = await axiosClient.delete("/admin/product/delete", {
      data: { _ids },
    });
    console.log("Sản phẩm đã bị xóa:", response.data);
    return response.data; // Trả về kết quả xóa
  } catch (error) {
    console.error("Lỗi khi xóa sản phẩm:", error);
    throw error;
  }
};

const updateProduct = async (_id, attributes) => {
  try {
    const response = await axiosClient.put("/admin/product/update", {
      _id,
      attributes,
    });
    console.log("Sản phẩm đã được cập nhật:", response.data);
    return response.data; // Trả về kết quả cập nhật
  } catch (error) {
    console.error("Lỗi khi cập nhật sản phẩm:", error);
    throw error;
  }
};

export { getAllProducts, getProduct, updateProduct, deleteProduct };

const uploadProduct = async (productData) => {
  try {
    const formData = new FormData();
    formData.append("name", productData.name);
    formData.append("price", productData.price);
    formData.append("description", productData.description);
    formData.append("ageAppropriate", productData.ageAppropriate);
    if (productData.image) {
      formData.append("image", productData.image);
    }

    const response = await axiosClient.post("/admin/product/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data", // Chắc chắn rằng header là đúng khi gửi file
      },
    });
    console.log("Sản phẩm đã đăng bán:", response.data);
    return response.data; // Trả về dữ liệu từ server (ví dụ: thông báo thành công)
  } catch (error) {
    console.error("Lỗi khi đăng bán sản phẩm:", error);
    throw error;
  }
};

export { uploadProduct };
