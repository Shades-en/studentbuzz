const express = require('express')
const {authFaculty} = require('../middleware/auth')

const router = express.Router()

router.use(authFaculty)

//posts
router.get('/posts', (req, res) => {
    //global posts
    res.json({
        hodPosts:[],
        facultyPosts: [],
        clubPosts: []
    })
})

router.post('/create-post', (req, res) => {
    console.log(req.body)
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

router.post('/createClass', (req, res) => {
    console.log(req.body)
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