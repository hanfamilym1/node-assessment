const data = require('./userData.json')


module.exports = {
    get: (req,res)=>{
        //console.log(data)
        // console.log(req.query)
        let {age, lastname, email, favorites} = req.query
        
            if(age){
                console.log(age)
                let lesserage = data.filter(user => user.age < age)
                res.status(200).send(lesserage)
            } else if (lastname) {
                console.log(lastname)
                let samelastname = data.filter(user => user.last_name === lastname)
                res.status(200).send(samelastname) 
            } else if (email) {
                let sameemail = data.filter(user => user.email === email)
                res.status(200).send(sameemail)
            } else if (favorites){
                let samefavorites = data.filter(user=> user.favorites.find((string)=>string === favorites))
                res.status(200).send(samefavorites)
            } else {
                res.status(200).send(data)
            }
        },
        getuser: (req,res)=>{
            console.log(req.params)
            let {id} = req.params
            let userbyid = data.filter(user=> user.id === Number(id))
            if (!userbyid[0]) {
                res.status(404).json(null)
            } else {
                res.status(200).send(userbyid[0])
            }
  
        },
        getadmins: (req,res)=>{
            let admins = data.filter(user=> user.type === 'admin')
            res.status(200).send(admins)
        },
        getnonadmins: (req,res)=>{
            let nonadmins = data.filter(user=> user.type !== 'admin')
            res.status(200).send(nonadmins)
        },
        gettype: (req,res)=>{
            // console.log(req.params)
            let {type} = req.params
            let typeofuser = data.filter(user=> user.type === type)
            res.status(200).send(typeofuser)
        },
        putuser: (req,res)=>{
            // console.log(req.body)
            // console.log(req.params)
            let {id} = req.params
            let index = data.findIndex(user=> user.id === Number(id))
            // console.log(index)
            data.splice(index, 1, req.body)
            res.status(200).send(data)
        },
        addUser: (req,res)=>{
            // console.log(req.body)
            let newlength = data.length+1
            req.body.id = newlength
            // console.log(req.body)
            data.push(req.body)
            res.status(200).send(data)
        },
        deleteUser: (req,res)=>{
            // console.log(req.params)
            let {id} = req.params
            let index = data.findIndex(user=>user.id === Number(id))
            data.splice(index, 1)
            res.status(200).send(data)
        }


    }
