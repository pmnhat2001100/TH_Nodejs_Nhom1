// Thêm tài khoản vào danh sách sản phẩm, trả về (page: addpro) trên trang (Admin)
const getAddPro = (req, res) => {
    return res.render('indexAdmin', {data: { title: 'Them san pham', page: 'addpro'}})
}

export default getAddPro

// Xong