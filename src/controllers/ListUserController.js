import userModel from './../services/userModel.js'

// Hiển thị danh sách tài khoản thông qua (page: listUser) trên trang Admin
const  getAllUser = async (req, res) => {
    let userList = await userModel.getAllUser();
    return res.render('indexAdmin', {data: { title: 'List User', page: 'listUser', rows: userList }})
}

export default {getAllUser}

// Xong

