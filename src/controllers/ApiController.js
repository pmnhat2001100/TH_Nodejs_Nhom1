import pool from './../configs/connectDB.js'


// Account (Admin)
// Hiển thị danh sách tài khoản [GET]
let getAllUsers = async (req, res) => {

    const [rows, fields] = await pool.execute('SELECT * FROM `listuser`');
    return res.status(200).json({
        message: 'ok',
        data: rows
    })
}

// Tạo (thêm) một tài khoản mới [POST]
let creatNewUser = async (req, res) => {
    let {name, account, password, email, address, idgender, idgroup} = req.body;

    if (!name || !account || !password || !email || !address || !idgender || !idgroup){
        return res.status(200).json({
            message: 'missing required params'
        })
    }
    await pool.execute('insert into listuser (name, account, password, email, address, idgender, idgroup) value(?,?,?,?,?,?,?) ', [name, account, password, email, address, idgender, idgroup])
    
    return res.status(200).json({
        message: 'ok'
    })
}

// Cập nhật tài khoản [PUT]
let updateUser = async (req, res) => {
    let {name, account, password, email, address, idgender, idgroup, idacc} = req.body;
    
    if (!name || !account || !password || !email || !address || !idgender || !idgroup || !idacc){
        return res.status(200).json({
            message: 'missing required params'
        })
    }
    await pool.execute('update listuser set name=?, account=?, password=?, email=?, address=?, idgender=?, idgroup=? where idacc=?', [name, account, password, email, address, idgender, idgroup, idacc])
    
    return res.status(200).json({
        message: 'ok'
    })
}

//  Xóa tài khoản
let deleteUser = async (req, res) => {
    let idacc = req.params.idacc

    if (!idacc){
        return res.status(200).json({
            message: 'missing required params'
        })
    }
    await pool.execute('delete from listuser where idacc=?', [idacc])
    
    return res.status(200).json({
        message: 'ok'
    })
}

// Account (Admin)

// Product (Admin)
// Hiển thị danh sách sản phẩm
let getAllProducts = async (req, res) => {

    const [rows, fields] = await pool.execute('SELECT * FROM `listproduct`');
    return res.status(200).json({
        message: 'ok',
        data: rows
    })
}

// Tạo (thêm) một sản phẩm mới
let creatNewProduct = async (req, res) => {
    let {name, giagoc, giaban, image, information, idgroup} = req.body
    if (!name || !giagoc || !giaban || !image || !information || !idgroup){
        return res.status(200).json({
            message: 'missing required params'
        })
    }
    await pool.execute('insert into listproduct (name, giagoc, giaban, image, information, idgroup) value(?,?,?,?,?,?) ', [name, giagoc, giaban, image, information, idgroup])
    
    return res.status(200).json({
        message: 'ok'
    })
}

// Cập nhật sản phẩm
let updateProduct = async (req, res) => {
    let {name, giagoc, giaban, image, information, idgroup, idpro} = req.body
    if (!name || !giagoc || !giaban || !image || !information || !idgroup || !idpro){
        return res.status(200).json({
            message: 'missing required params'
        })
    }
    await pool.execute('update listproduct set name=?, giagoc=?, giaban=?, image=?, information=?, idgroup=? where idpro=?', [name, giagoc, giaban, image, information, idgroup, idpro])
    
    return res.status(200).json({
        message: 'ok'
    })
}

// Xóa sản phẩm
let deleteProduct = async (req, res) => {
    let idpro = req.params.idpro

    if (!idpro){
        return res.status(200).json({
            message: 'missing required params'
        })
    }
    await pool.execute('delete from listproduct where idpro=?', [idpro])
    
    return res.status(200).json({
        message: 'ok'
    })
}

// Product (Admin)

export default {getAllUsers, creatNewUser, updateUser, deleteUser, getAllProducts, creatNewProduct, updateProduct, deleteProduct}

// Xong