import axiosClient from "./axiosClient";
// Gửi yêu cầu lấy thông tin người dùng với điều kiện role là "admin" hoặc "owner"
const getUserAdminOwner = async () => {
  try {
    const response = await axiosClient.get("/admin/user/findAll"); // Gọi API để lấy danh sách người dùng
    console.log("Dữ liệu người dùng:", response.data); // In dữ liệu người dùng
    if (
      response.data &&
      response.data.users &&
      response.data.users.length > 0
    ) {
      // Lọc danh sách người dùng để chỉ lấy những người có role là "admin" hoặc "owner"
      const filteredUsers = response.data.users.filter(
        (user) => user.role === "admin" || user.role === "owner"
      );
      return filteredUsers; // Trả về danh sách người dùng có role là "admin" hoặc "owner"
    }
    return []; // Nếu không có người dùng nào, trả về mảng rỗng
  } catch (error) {
    console.error("Lỗi khi lấy thông tin người dùng:", error);
    return [];
  }
};

export default getUserAdminOwner;
