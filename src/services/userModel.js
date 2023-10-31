import pool from './../configs/connectDB.js'

// Account (Admin) 

// Model in danh sách tài khoản
const getAllUser = async () => {
    const [rows, fields] = await pool.execute('SELECT * FROM `listuser`');
    return rows;
}

// Model chi tiết tài khoản thông qua idacc
const detailUser = async (idacc) => {
    const [rows, fields] = await pool.execute('SELECT * FROM `listuser` where idacc=?', [idacc])
    return rows[0]
}

// Cập nhật tài khoản trên trang (Admin)
const updateUser = async (name, account, password, email, address, idgender, idgroup, idacc) => {
    await pool.execute('update listuser set name=?, account=?, password=?, email=?, address=?, idgender=?, idgroup=? where idacc=?', [name, account, password, email, address, idgender, idgroup, idacc])
}

// Xóa tài khoản trên trang (Admin)
const deleteUser = async (idacc) => {
    await pool.execute('delete from listuser where idacc=?', [idacc])
    
}

// Model thêm tài khoản trên trang (Admin)
const insertUser = async (name, account, password, email, address, idgender, idgroup) => {
    await pool.execute('insert into listuser (name, account, password, email, address, idgender, idgroup) value(?,?,?,?,?,?,?) ', [name, account, password, email, address, idgender, idgroup])
}

// Account (Admin)

// Product (Admin) 

// Model in danh sách sản phẩm
const getAllProduct = async () => {
    const [rows, fields] = await pool.execute('SELECT * FROM `listproduct`');
    return rows;
}

// Model chi tiết sản phẩm
const detailProduct = async (idpro) => {
    const [rows, fields] = await pool.execute('SELECT * FROM `listproduct` where idpro=?', [idpro])
    return rows[0]
}

// Model cập nhật tài khoản trên trang (Admin)
const updateProduct = async (name, giagoc, giaban, image, information, idgroup, idpro) => {
    await pool.execute('update listproduct set name=?, giagoc=?, giaban=?, image=?, information=?, idgroup=? where idpro=?', [name, giagoc, giaban, image, information, idgroup, idpro])
}

// Model xóa sản phẩm trên trang (Admin)
const deleteProduct = async (idpro) => {
    await pool.execute('delete from listproduct where idpro=?', [idpro])
    
}

// Model thêm sản phẩm trên trang (Admin)
const insertProduct = async (name, giagoc, giaban, image, information, idgroup) => {
    // Nếu không chọn giá trị cho idgroup
    if (idgroup === undefined || idgroup === null) {
        // Gán một giá trị mặc định cho `idgroup`
        idgroup = 1;
      }
    await pool.execute('insert into listproduct (name, giagoc, giaban, image, information, idgroup) value(?,?,?,?,?,?) ', [name, giagoc, giaban, image, information, idgroup])
}

// Product (Admin)


export default {getAllUser, insertUser, detailUser, deleteUser, updateUser, getAllProduct, updateProduct, deleteProduct, insertProduct, detailProduct};

// Xong