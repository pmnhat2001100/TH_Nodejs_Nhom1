const getSignup = (req, res) => {
    return res.render('index', {data: { title: 'Dang ky', page: 'signup'}})
}

export default getSignup


