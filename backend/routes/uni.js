const express = require('express')
const {authUni} = require('../middleware/auth')

const router = express.Router()

router.use(authUni)


//faculty
router.post('/create-faculty', (req, res) => {
    console.log(req.body)
    res.json({msg: 'faculty created'})
})


//posts
router.get('/posts', (req, res) => {
    //global posts
    res.json({
        hodPosts:[],
        facultyPosts: [],
        clubPosts: []
    })
})


//profile
router.patch('/editProfile', (req, res) => {
    console.log(req.body)
    //req.body will have what details to edit
    res.json({
        name: 'university',
    })
})


//clubs
router.get('/club-approval-requests', (req, res) => {
    res.json({
        clubs: []
    })
})

router.post('/approve-club', (req, res) => {
    //add condition for not approving club
    console.log(req.body)
    res.json({
        msg: 'club approved'
    })
})


//students
router.post('/add-student-file', (req, res) => {
    console.log(req.body)
    res.json({
        msg: 'students added'
    })
})

router.patch('/edit-student-file', (req, res) => {
    //empty all dbs except college
    res.json({
        msg: 'student file edited'
    })
})

module.exports = router