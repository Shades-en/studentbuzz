const express = require('express')
const Parent = require('../models/parent')
const Child = require('../models/child')
const child = require('../models/child')

const router = express.Router()

router.post('/create-student', (req, res) => {
    console.log(req.body)
    res.json({msg: 'student created'})
})

router.post('/create-uni', (req, res) => {
    console.log(req.body)
    res.json({msg: 'University created'})
})




//dummy tests
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
    await Parent.deleteMany()
    await Child.deleteMany()
    res.json({msg: 'deleted'})
})

////

module.exports = router