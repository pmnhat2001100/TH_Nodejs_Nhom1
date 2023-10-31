import userModel from "../services/userModel.js"

// Account (Admin)

// Cập nhật dữu liệu tài khoản trên trang (Admin) // Cập nhật dữ liệu (POST) lên csdl và trả về trang "/listuser"
const updateUser = async (req, res) => {
    let {name, account, password, email, address, idgender, idgroup, idacc} = req.body
    await userModel.updateUser(name, account, password, email, address, idgender, idgroup, idacc)
    return res.redirect("/listuser")
}

// Xóa tài khoản trên trang (Admin) // Trả về trang "/listuser"
const deleteUser = async (req, res) => {
    let idacc = req.params.idacc
    await userModel.deleteUser(idacc)
    return res.redirect("/listuser")
}


// Thêm tài khoản trên trang (Admin) // Thêm tài khoản mới (POST) và trả về trang "/listuser"
const insertUser = async (req, res) => {

    let {name, account, password, email, address, idgender, idgroup} = req.body
    await userModel.insertUser(name, account, password, email, address, idgender, idgroup)
    return res.redirect("/listuser")
}

// Account (Admin)

// Product (Admin)

// Cập nhật dữu liệu sản phẩm trên trang (Admin) // Cập nhật dữ liệu (POST) lên csdl và trả về trang "/productAdmin"
const updateProduct = async (req, res) => {
    let {name, giagoc, giaban, image, information, idgroup, idpro} = req.body
    await userModel.updateProduct(name, giagoc, giaban, image, information, idgroup, idpro)
    return res.redirect("/productAdmin")
}

// Xóa tài khoản trên trang (Admin) // Trả về trang "/productAdmin"
const deleteProduct = async (req, res) => {
    let idpro = req.params.idpro
    await userModel.deleteProduct(idpro)
    return res.redirect("/productAdmin")
}


// Thêm tài khoản trên trang (Admin) // Thêm tài khoản mới (POST) và trả về trang "/productAdmin"
const insertProduct = async (req, res) => {

    let {name, giagoc, giaban, image, information, idgroup} = req.body
    await userModel.insertProduct(name, giagoc, giaban, image, information, idgroup)
    return res.redirect("/productAdmin")
}

// Product (Admin)


export default {insertUser, deleteUser, updateUser, updateProduct, deleteProduct, insertProduct}

// Xong