import axiosClient from "../Api/axiosClient"; // Import axiosClient

// Gửi yêu cầu lấy thông tin người dùng với điều kiện role là "user"
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
const getUserTopThree = async () => {
  try {
    const response = await axiosClient.get("/admin/user/findAll"); // Gọi API lấy tất cả người dùng
    console.log("Dữ liệu người dùng:", response.data); // In ra dữ liệu trả về
    if (response.data && response.data.users) {
      // Lọc danh sách người dùng và lấy 3 người dùng đầu tiên
      const topThreeUsers = response.data.users.slice(0, 3);
      return topThreeUsers; // Trả về 3 người dùng đầu tiên
    }
    return []; // Trả về mảng rỗng nếu không có dữ liệu người dùng
  } catch (error) {
    console.error("Lỗi khi lấy thông tin người dùng:", error);
    return []; // Trả về mảng rỗng nếu có lỗi
  }
};

export { getUserInformation, getUserTopThree };
