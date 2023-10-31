const getSignin = (req, res) => {
    return res.render('index', {data: { title: 'Dang nhap', page: 'signin'}})
}

export default getSignin
