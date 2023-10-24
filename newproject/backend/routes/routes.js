const express = require('express')

const router = express.Router()

//GET all projects
router.get('/', (req, res) => {
    res.json({mssg: 'Get all newprojects'})
})

//GET a single projects
router.get('/:id', (req, res) => {
    res.json({mssg: 'Get single projects'})
})

//POST a new project
router.post('/', (req, res) => {
    res.json('New project')
})

//DELETE a new project
router.delete('/:id', (req, res) => {
    res.json('Delete new project')
})

//UPDATE a new project
router.patch('/:id', (req, res) => {
    res.json('Update new project')
})

module.exports = router