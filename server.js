const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const ctrl = require('./usersCtrl')

app.use(bodyParser.json())

const port = 3000

app.get('/api/users', ctrl.get)
app.get('/api/users/:id', ctrl.getuser)
app.get('/api/admins', ctrl.getadmins)
app.get('/api/nonadmins', ctrl.getnonadmins)
app.get('/api/user_type/:type', ctrl.gettype)
app.put('/api/users/:id', ctrl.putuser)
app.post('/api/users', ctrl.addUser)
app.delete('/api/users/:id', ctrl.deleteUser)


app.listen(port, ()=>{console.log(`This is the port ${port}`)})