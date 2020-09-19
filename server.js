const express = require('express')
const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({extended: true}))
let people = []
app.post('/people', (req, res) => {
    let person = req.body
    console.log(person)
    people.push(person)
    res.status(201).send(person)
})
app.get('/people', (req, res) => {
    res.json(people)
})

app.get('/hello', (req, res) => {
    res.json({ message: 'hello'})
})

app.post('/say', (req, res) => {
    res.status(201).json({ message: 'hi!'})
})

app.listen(port, () => {
    console.log(`Example app listenling at http://localhost:${port}`)
})