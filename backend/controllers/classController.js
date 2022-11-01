const helloWorld = (req, res) => {
    console.log(req.body)
    res.json({msg: 'faculty created'})
}