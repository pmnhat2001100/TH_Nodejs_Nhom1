// Thêm tài khoản vào danh sách tài khoản, trả về (page: addacc) trên trang (Admin)
const getAddAcc = (req, res) => {
    return res.render('indexAdmin', {data: { title: 'Them tai khoan', page: 'addacc'}})
}

export default getAddAcc

// Xong