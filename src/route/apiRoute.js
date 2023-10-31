import  express from "express";
import ApiController from '../controllers/ApiController.js'
let router = express.Router();

const initAPIRoute = (app) => {
    // API Router (Account Admin)
    // Hiển thị danh sách tài khoản
    router.get('/users', ApiController.getAllUsers) // method GET -> READ data
    // Tạo mới (thêm) một tài khoản 
    router.post('/create-user', ApiController.creatNewUser) // method POST -> CREAT data
    // Cập nhật tài khoản
    router.put('/update-user', ApiController.updateUser) // method PUT -> UPDATE data
    // Xóa tài khoản
    router.delete('/delete-user/:idacc', ApiController.deleteUser) // method DELETE -> DELETE data

    // API Router (Product Admin)
    // Hiển thị danh sách sản phẩm
    router.get('/products', ApiController.getAllProducts) // method GET -> READ data
    // Tạo mới (thêm) một sản phẩm mới
    router.post('/create-product', ApiController.creatNewProduct) // method POST -> CREAT data
    // Update sản phẩm
    router.put('/update-product', ApiController.updateProduct) // method PUT -> UPDATE data
    // Xóa sản phẩm
    router.delete('/delete-product/:idpro', ApiController.deleteProduct) // method DELETE -> DELETE data

    // Định nghĩa tuyến đường cho router
    return app.use('/api/v1', router);
}

export default initAPIRoute

// Xong