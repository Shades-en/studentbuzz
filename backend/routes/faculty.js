const express = require('express')
const { getCurrentFaculty } = require('../middleware/auth')
const Faculty = require('../models/faculty')
const University = require('../models/university')
const Class = require('../models/class')
const Student = require('../models/student')
const Post = require('../models/post')
const { uploadPost } = require('../middleware/upload')
const fs = require('fs')

const router = express.Router()

router.use(getCurrentFaculty)

//posts
router.get('/posts', (req, res) => {
    //global posts
    res.json({
        hodPosts:[],
        facultyPosts: [],
        clubPosts: []
    })
})

router.post('/create-post', uploadPost.single('post'), async (req, res) => {
    try{
        const uni = await University.findOne({name: "MSRIT"})
        const faculty = await Faculty.findOne({name: "Lincy"})
        const classroom = await Class.findOne({name: "CSE 1"})
        const post = await Post.create({
            author: classroom._id,
            authorName: faculty.name,
            content: "Hello",
            image: {
                data: fs.readFileSync(`${process.cwd()}/uploads/posts/${req.file.filename}`, {encoding: 'base64'}),
                imageName: req.file.filename
            },
            university: uni._id,
            category: "hod",
        })
        fs.unlinkSync(`${process.cwd()}/uploads/posts/${req.file.filename}`)
    } catch(error) {
        res.status(400).json({error: error.message})
        return
    }
    // console.log(req.body)
    res.json({
        msg: 'post created'
    })
})

router.delete('/delete-post/:pid', (req, res) => {
    console.log(req.params.pid)
    res.json({
        msg: 'post deleted'
    })
})

//search
router.get('/search', (req, res) => {
    //req.query.search
    //name and category
    res.json({
        req: req.query
    })
})

//messages
router.post('/sendMessage/:sid', (req, res) => {
    console.log(req.body)
    res.json({
        msg: 'message sent',
        sid: req.params.sid
    })
})

//profile
router.patch('/editProfile', (req, res) => {
    console.log(req.body)
    //req.body will have what details to edit
    res.json({
        name: 'faculty',
    })
})

//clubs
router.get('/allclubs', (req, res) => {
    res.json({
        clubs: []
    })
})


//class
router.get('/getClasses/:cid', (req, res) => {
    console.log(req.params.cid)
    res.json({
        classes: []
    })
})

router.get('/allClasses', (req, res) => {
    res.json({
        classes: []
    })
})

router.post('/createClass', async (req, res) => {
    try{
        const faculty = await Faculty.findOne({name: "Lincy"})
        const uni = await University.findOne({name: "MSRIT"})
        const students = await Student.find({university: uni._id})
        const classroom = await Class.create({
            name: "CSE 1",
            faculty: faculty._id,
            students: students.map(s => s._id),
            university: uni._id
        })

    } catch(error) {
        res.status(400).json({error: error.message})
        return
    }
    // console.log(req.body)
    res.json({
        msg: 'class created'
    })
})

router.patch('/editClass/:cid', (req, res) => {
    console.log(req.params.cid, req.body)
    res.json({
        msg: 'class edited'
    })
})

router.delete('/deleteClass/:cid', (req, res) => {
    console.log(req.params.cid)
    res.json({
        msg: 'class deleted'
    })
})

module.exports = router