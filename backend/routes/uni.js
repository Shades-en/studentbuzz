const express = require('express')
const { getCurrentUni } = require('../middleware/auth')
const Faculty = require('../models/faculty')
const University = require('../models/university')


const router = express.Router()

router.use(getCurrentUni)


//faculty
router.post('/create-faculty', async (req, res) => {
    // console.log(req.body)
    try{
        const uni = await University.findOne({name: "MSRIT"})
        const faculty = await Faculty.create({
            uuid: "123",
            name: "Lincy",
            email: "lincy@gmail.com",
            university: uni._id,
            department: "CSE",
            type: "hod"
        })
    } catch(error) {
        res.status(400).json({error: error.message})
        return
    }
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