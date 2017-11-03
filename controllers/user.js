'use strict'

//importamis los modelos
const User=require('../models/user')

function getUser(req,res){
    let idUser=req.params.idUser
    User.findById(idUser,(err,user)=>{
        if(err) return res.status(500).send({message:`error al realizar la peticion ${err}`})
        if(!user) return res.status(404).send({message:`El producto no existe`})
        res.status(200).send({user})
    })
}

function getUsers(req,res){
    User.find({},(err,users)=>{
        if(err) return res.status(500).send({message:`error al realizar la peticion ${err}`})
        if(!users) return res.status(404).send({message:`No existe el producto`})
        res.status(200).send({users})
    })
}

function updateUser(req,res){
    var idUser= req.params.idUSer
    var update=req.body
    User.findByIdAndUpdate(idUser,update,(req,userUpdated)=>{
        if(err) res.status(500).send({message:`Error al actualizar el usuario ${err}`})
        res.status(200).send({user:userUpdated})
    })
}
function deleteUser(req,res){
    var idUser=req.params.idUser
    user.findById(idUser,(err,user)=>{
        if(err) res.status(500).send({menssage:`Error al borrar el usuario ${err}`})
        user.remove(err=>{
            if(err) res.status(500).send({message:`Error al borrar al usuario ${err}`})
            res.status(200).send({message:`El usuario fue eliminado`})
        })
    })
}
function insertUser(req,res){
    console.log('POST /api/user')
    console.log(req.body)
    
    let user=new User()
    user.name=req.body.name
    user.paterno=req.body.paterno
    user.materno=req.body.materno
    user.nCuenta=req.body.nCuenta
    user.email=req.body.email
    user.celular=req.body.celular
    user.pass=req.body.pass
    user.foto=req.body.foto
    
    user.save((err,userStored)=>{
        if(err){
            res.status(500).send({message:`Error al salvar en la BD: ${err}`})
        } 
        else{
            if(!userStored){
                res.status(404).send({message:`No se registro el usuario`})
            }
            else{
                res.status(200).send({user:userStored})
            }
        }
    })
}
function findByLog(req,res){
    let numCuenta=req.body.nCuenta
    let password=req.body.pass
    console.log('POST /api/login')
    console.log(req.body)
    
    User.findOne({nCuenta:numCuenta,pass:password},(err,users)=>{
        if(err){
          return res.status(500).send({message:`error al realizar la peticion ${err}`})  
        }
        else{
            if(users){
                res.status(200).send({users})
            }
            else{
                res.status(400).send({message:'no se encuentra ese usuario'})
            }
        }        
    })
}


module.exports={
    getUser,
    getUsers,
    updateUser,
    deleteUser,
    insertUser,
    findByLog
}