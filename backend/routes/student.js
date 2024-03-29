const express = require('express')
const {getCurrentStudent} = require('../middleware/auth')
const Student = require('../models/student')
const University = require('../models/university')
const Club = require('../models/club')
const { uploadEvent, uploadClub } = require('../middleware/upload')
const fs = require('fs')
var mime = require('mime-types')

const storage = require('../firebase.js')
const { getDownloadURL, ref, uploadString } = require('firebase/storage')

const router = express.Router()

router.use(getCurrentStudent)

//posts
router.get('/posts', (req, res) => {
    res.json({
        hodPosts:[],
        facultyPosts: [],
        clubPosts: []
    })
})

router.post('/create-post', (req, res) => {
    //for a club
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

router.get('/find-partner', (req, res) => {
    console.log(req.body)
    //only in student collection
    res.json({
        req: req.body
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
        name: 'student',
    })
})

//classes
router.get('/getClasses/:cid', (req, res) => {
    console.log(req.params.cid)
    res.json({
        classes: []
    })
})


//clubs
router.patch('/follow-manage/:cid', (req, res) => {
    console.log(req.params)
    //use club id
    res.json({
        msg: 'followed'
    })
})

router.get('/clubs', (req, res) => {
    res.json({
        clubs: []
    })
})

router.post('/add-club-member/:sid', (req, res) => {
    console.log(req.params)
    res.json({
        msg: 'member added'
    })
})

router.patch('/change-club-admin/:sid', (req, res) => {
    console.log(req.params)
    res.json({
        msg: 'admin changed'
    })
})

router.delete('/remove-club-member/:sid', (req, res) => {
    console.log(req.params)
    res.json({
        msg: 'member removed'
    })
})

router.patch('/re-add-club-member/:sid', (req, res) => {
    console.log(req.params)
    res.json({
        msg: 'member re-added'
    })
})

router.get('/getTasks', (req, res) => {
    res.json({
        tasks: []
    })
})

router.post('/create-club', uploadClub.single('club'), async (req, res) => {
    try{

        
        
        let mimeType = mime.contentType(req.file.filename)
        let imageRef = ref(storage, `clubs/` + req.file.filename);
        let imageData = fs.readFileSync(`${process.cwd()}/uploads/clubs/${req.file.filename}`, {encoding: 'base64'})
        let snapshot = await uploadString(imageRef, imageData, 'base64', {contentType: mimeType})
        let urlImage = await getDownloadURL(imageRef)

        const uni = await University.findOne({name: "MSRIT"})
        const students = await Student.find({university: uni._id})
        const club = await Club.create({
            name: "GDSCS",
            description: "GooglSe Developer Student Club",
            avatar: urlImage,
            admin: students[0]._id,
            members: [{
                _id: students[0]._id,
            },{
                _id: students[1]._id,
            }],
            university: uni._id,
            followers: students.map(s => s._id),
            events: [],
            tasks: [],
        })
        fs.unlinkSync(`${process.cwd()}/uploads/clubs/${req.file.filename}`)

        res.json({
            msg: 'club created',
            club
        })
    }
    catch(err){
        res.status(500).json({
            msg: err.message
        })
        return
    }
    // console.log(req.body)
})

router.post('/add-event', uploadEvent.single('event'), (req, res) => {
    console.log(req.body)
    res.json({
        msg: 'event added'
    })
})

router.delete('/delete-event/:eid', (req, res) => {
    console.log(req.params)
    res.json({
        msg: 'event deleted'
    })
})

router.post('/assign-task', (req, res) => {
    //make sure only team members can be assigned tasks
    console.log(req.body)
    res.json({
        msg: 'task assigned'
    })
})

router.patch('/edit-task', (req, res) => {
    console.log(req.body)
    res.json({
        msg: 'task edited'
    })
})

router.delete('/delete-task', (req, res) => {
    console.log(req.query)
    res.json({
        msg: 'task deleted'
    })
})

router.patch('/task-accomplish', (req, res) => {
    console.log(req.query)
    //use club id and task id
    res.json({
        msg: 'task accomplished'
    })
})

router.patch('/task-confirm', (req, res) => {
    console.log(req.query)
    //also do something if task not completed
    //use club id and task id
    //update points
    res.json({
        msg: 'task confirmed'
    })
})


module.exports = router