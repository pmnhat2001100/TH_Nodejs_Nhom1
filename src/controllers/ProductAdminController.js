import userModel from './../services/userModel.js'

// Hiển thị danh sách sản phẩm thông qua (page: productAdmin) trên trang Admin
const  getAllProductAdmin = async (req, res) => {
    let productList = await userModel.getAllProduct();
    return res.render('indexAdmin', {data: { title: 'List Product', page: 'productAdmin', rows: productList }})
}

export default getAllProductAdmin

// Xong