import userModel from "../services/userModel.js"
// Update dữ liệu tài khoản trên trang (Admin). Lấy dữ liệu thông qua (idacc) để hiển thị trên trang (editacc) dùng cho việc update tài khoản
const editUser = async (req, res) => {
    let idacc = req.params.idacc
    let dataUser = await userModel.detailUser(idacc)
    return res.render('indexAdmin', { data: { title: 'Edit User', page: 'editacc', rows: dataUser}})
}

export default editUser

// Xong