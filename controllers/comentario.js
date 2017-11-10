'use strict'

//importamis los modelos
const User=require('../models/comentario')

function getComentario(req,res){
    let idComentario=req.params.idComentario
    Comentario.findById(idComentario,(err,comentario)=>{
        if(err) return res.status(500).send({message:`error al realizar la peticion ${err}`})
        if(!comentario) return res.status(404).send({message:`El comentario no existe`})
        res.status(200).send({comentario})
    })
}

function getComentarios(req,res){
    User.find({},(err,comentarios)=>{
        if(err) return res.status(500).send({message:`error al realizar la peticion ${err}`})
        if(!comentarios) return res.status(404).send({message:`No existe el comentario`})
        res.status(200).send({comentarios})
    })
}

function updateComentario(req,res){
    var idComentario= req.params.idComentario
    var update=req.body
    Comentario.findByIdAndUpdate(idComentario,update,(req,ComentarioUpdated)=>{
        if(err) res.status(500).send({message:`Error al actualizar el Comentario ${err}`})
        res.status(200).send({comentario:ComentarioUpdated})
    })
}
function deleteComentario(req,res){
    var idComentario=req.params.idComentario
    Comentario.findById(idComentario,(err,comentario)=>{
        if(err) res.status(500).send({menssage:`Error al borrar el Comentario ${err}`})
        Comentario.remove(err=>{
            if(err) res.status(500).send({message:`Error al borrar el Comentario ${err}`})
            res.status(200).send({message:`El Comentario fue eliminado`})
        })
    })
}
function insertComentario(req,res){
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


module.exports={
    getComentario,
    getComentarios,
    updateComentario,
    deleteComentario,
    insertComentario
}