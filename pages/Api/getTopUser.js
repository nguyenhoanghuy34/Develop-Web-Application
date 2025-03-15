import axiosClient from "../Api/axiosClient"; // Import axiosClient

const getUserInformation = async () => {
  try {
    const response = await axiosClient.get("/admin/user/findAll"); // Gọi API để lấy danh sách người dùng
    console.log("Dữ liệu người dùng:", response.data); // In dữ liệu người dùng
    if (
      response.data &&
      response.data.users &&
      response.data.users.length > 0
    ) {
      // Lọc danh sách người dùng để chỉ lấy những người có role là "user"
      const filteredUsers = response.data.users.filter(
        (user) => user.role === "user"
      );
      return filteredUsers; // Trả về danh sách người dùng có role là "user"
    }
    return []; // Nếu không có người dùng nào, trả về mảng rỗng
  } catch (error) {
    console.error("Lỗi khi lấy thông tin người dùng:", error);
    return [];
  }
};
export default getUserInformation;
