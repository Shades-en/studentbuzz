const express = require('express')
// const Parent = require('../models/parent')
// const Child = require('../models/child')
const Image = require('../models/image')
const University = require('../models/university')
const Student = require('../models/student')
const {uploadTranscript} = require('../middleware/upload')
const fs = require('fs')
const student = require('../models/student')
const Class = require('../models/class')

const router = express.Router()

router.post('/create-student', async (req, res) => {
    try{
        const uni = await University.findOne({name: "MSRIT"})
        console.log(uni._id)

        const student = await Student.create({
            uuid: "124",
            usn: "124",
            name: "Umraz",
            email: "umraz@gmail.com",
            university: uni._id,
            department: "CSE",
        })
    }
    catch(error){
        console.log(error)
        res.status(400).json({error: error.message})
        return
    }
    // console.log(req.body)
    res.json({msg: 'student created',
    student: student})
})

router.post('/create-uni', uploadTranscript.single('image'), (req, res) => {
    // console.log(req.file.filename)
    try{
        const uni = University.create({
            name: "MSRIT",
            uuid: "1234",
            location: "Bangalore",
            transcript: {
                data: fs.readFileSync(`${process.cwd()}/uploads/transcripts/${req.file.filename}`),
                file_name: req.file.filename
            }
        })
    } catch(error) {
        res.status(400).json({error: error.message})
    }
    // console.log(req.body)
    res.json({msg: 'University created'})
})




//dummy tests

router.get('/getUni', async (req, res) => {
    const studentUni = await Student.findOne({name: "Owais"}).populate('university')
    res.json({msg: 'University fetched',
    studentUni: studentUni})
    // studUni = student.university.
})

router.get('/getStud', async (req, res) => {
    const classStud = await Class.findOne({name: "CSE 1"}).populate('students').populate('university')
    res.json({msg: 'Students fetched',
    classStud})
    // studUni = student.university.
})

router.post('/testFile', uploadTranscript.single('image'), async (req, res) => {
    // console.log(req.file.filename)
    var imgData = {
        name: req.file.filename,
        desc: "testImage",
        img: {
            data: fs.readFileSync(`${process.cwd()}/uploads/transcripts/${req.file.filename}`, {encoding: 'base64'}),
            contentType: 'image/jpeg'
        }
    }
    // console.log(imgData.img.data)
    // console.log(imgData)
    var mongoOB = await Image.create(imgData, (err, item) => {
        if (err) {
            console.log(err);
        }
        else{
            // console.log(item)
            fs.unlinkSync(`${process.cwd()}/uploads/transcripts/${req.file.filename}`)
            res.json({msg: 'image saved',
            mongoOB: item})
        }
    });
    
})

router.get('/testFile', async (req, res) => {
    // var img = await Image.findOne()
    var uni = await University.findOne()
    // console.log(uni.transcript.data)
    // fs.writeFileSync(`${process.cwd()}/uploads/transcripts/test.png`, img.img.data, {encoding: 'base64'});
    fs.writeFileSync(`${process.cwd()}/uploads/transcripts/test.png`, uni.transcript.data);
    res.json({uni})
})

router.get('/test1', async (req, res) => {
    const parent1 = await Parent.create({
        name: 'parent1'
    })

    const parent2 = await Parent.create({
        name: 'parent2'
    })

    const child1 = await Child.create({
        name: 'child1',
        parent: parent1._id
    })

    const child2 = await Child.create({
        name: 'child2',
        parent: parent1._id
    })

    const child3 = await Child.create({
        name: 'child3',
        parent: parent2._id
    })

    var child1_parent = await Child.findById(child1._id).populate('parent')
    var child2_parent = await Child.findById(child2._id).populate('parent')
    var child3_parent = await Child.findById(child3._id).populate('parent')

    res.json({
        child1_parent,
        child2_parent,
        child3_parent
    })
})

router.get('/test2', async (req, res) => {
    const child1 = await Child.create({
        name: 'child1'
    })

    const child2 = await Child.create({
        name: 'child2'
    })

    const parent1 = await Parent.create({
        name: 'parent1',
    })

    parent1.children.push(child1._id)
    parent1.save()

    res.json({
        parent1
    })
})

router.delete('/', async (req, res) => {
    await Student.deleteMany()
    // await Parent.deleteMany()
    // await Child.deleteMany()
    await Image.deleteMany()
    res.json({msg: 'deleted'})
})

////

module.exports = router