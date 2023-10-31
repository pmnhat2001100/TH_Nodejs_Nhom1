import  express from "express";
import getSignin from "../controllers/SigninController.js";
import getSignup from "../controllers/SignupController.js";
import HomeController from "../controllers/HomeController.js";
import ListUserController from "../controllers/ListUserController.js";
import getAllProductAdmin from "../controllers/ProductAdminController.js";
import getAddAcc from "../controllers/AddAccController.js";
import getAddPro from "../controllers/AddProController.js";
import UserController from "../controllers/UserController.js";
import editUser from "../controllers/EditAccController.js";
import editProduct from "../controllers/EditProController.js";
const router =  express.Router();
    // Route trang home
    router.get('/', HomeController.getHomePage) // [GET] /home
    router.get('/homeAdmin', HomeController.getHomePageAdmin) // [GET] /homeAdmin (Trả về trang home của Admin)
    router.get('/homeUser', HomeController.getHomePageUser) // [GET] /homeUser (Trả về trang home của User)
    // Route giao diện đăng nhập, đăng ký
    router.get('/signin', getSignin)
    router.get('/signup', getSignup)
    // Route thêm hoặc tạo mới 1 tài khoản hay 1 sản phẩm
    router.get('/addacc', getAddAcc) // [GET] /addacc (Trả về trang thêm tài khoản của Admin)
    router.get('/addpro', getAddPro) // [GET] /addpro (Trả về trang thêm sản phẩm của Admin)
    // Route hiển thị danh sách tài khoản hoặc danh sách sản phẩm
    router.get('/listuser', ListUserController.getAllUser) // [GET] /listuser (Trả về trang danh sách tài khoản của Admin)
    router.get('/productAdmin', getAllProductAdmin) // [GET] /productAdmin (Trả về trang danh sách sản phẩm của Admin)
    // Router quản lý danh sách tài khoản thuộc quyền(Admin)
    router.post('/user_insert', UserController.insertUser) // [POST] /user_insert (Thêm tài khoản và trả về trang /listuser)
    router.get('/user_edit/:idacc', editUser) // [GET] /user_edit/:idacc (Lấy dữ liệu tài khoản thông qua idacc để hiển thị trên page editacc dùng để update)
    router.get('/user_delete/:idacc', UserController.deleteUser) // [GET] /user_delete/:idacc (Lấy dữ liệu idacc để xóa tài khoản và trả về trang /listuser)
    router.post('/user_update', UserController.updateUser) // [POST] /user_update (Update tài khoản và trả về trang /listuser)
    // Router quản lý danh sách sản phẩm(sách) thuộc quyền(Admin)
    router.post('/product_insert', UserController.insertProduct) //[POST] /product_insert (Thêm sản phẩm và trả về trang /productAdmin)
    router.get('/product_edit/:idpro', editProduct) // [GET] /product_edit/:idpro (Lấy dữ liệu sản phẩm thông qua idpro để hiển thị trên page editpro dùng để update)
    router.get('/product_delete/:idpro', UserController.deleteProduct) // [GET] /product_delete/:idpro (Lấy dữ liệu idpro để xóa sản phẩm và trả về trang /productAdmin)
    router.post('/product_update', UserController.updateProduct) // [POST] /product_update (Update sản phẩm và trả về trang /productAdmin)

const initWebRoute = (app) => {
    // Định nghĩa tuyến đường cho router
    return app.use('/', router);
}

export default initWebRoute

// Xong