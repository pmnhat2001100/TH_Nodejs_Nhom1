// Hiển thị trang home mặc định khi chưa đăng nhập
const getHomePage = (req, res) => {
    return res.render('index', {data: { title: 'Home page', page: 'home'}})
}

// Hiển thị trang home khi đăng nhập tài khoản Admin
const getHomePageAdmin = (req, res) => {
    return res.render('indexAdmin', {data: { title: 'Home page', page: 'home'}})
}

// Hiển thị trang home khi đăng nhập tài khoản User
const getHomePageUser = (req, res) => {
    return res.render('indexUser', {data: { title: 'Home page', page: 'home'}})
}
export default {getHomePage, getHomePageAdmin, getHomePageUser};

// Xong