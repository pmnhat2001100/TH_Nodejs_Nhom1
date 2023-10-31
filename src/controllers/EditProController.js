import userModel from "../services/userModel.js"
// Update dữ liệu sản phẩm trên trang (Admin). Lấy dữ liệu thông qua idacc để hiển thị trên trang (editacc) dùng cho việc update sản phẩm
const editProduct = async (req, res) => {
    let idpro = req.params.idpro
    let dataPro = await userModel.detailProduct(idpro)
    return res.render('indexAdmin', { data: { title: 'Edit Product', page: 'editpro', rows: dataPro}})
}

export default editProduct

// Xong