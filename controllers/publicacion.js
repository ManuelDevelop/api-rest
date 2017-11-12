'use strict'

//importamis los modelos
const Publicacion=require('../models/publicacion')
const User=require('../models/user')
const fs=require('fs')
const path=require('path')

function getPublicacion(req,res){
    let idPublicacion=req.params.idPublicacion
    Publicacion.findById(idPublicacion,(err,publicacion)=>{
        if(err) return res.status(500).send({message:`error al realizar la peticion ${err}`})
        if(!publicacion) return res.status(404).send({message:`La PubPublicacion no existe`})
        res.status(200).send({publicacion})
    })
}

function getPublicaciones(req,res){
    Publicacion.find({},(err,publicaciones)=>{
        if(err) return res.status(500).send({message:`error al realizar la peticion ${err}`})
        if(!publicaciones) return res.status(404).send({message:`No hay publicaciones`})
        res.status(200).send({publicaciones})
    })
}

function updatePublicacion(req,res){
    var idPublicacion= req.params.idPublicacion
    var update=req.body
    Publicacion.findByIdAndUpdate(idPublicacion,update,(req,publicacionUpdated)=>{
        if(err) return res.status(500).send({message:`Error al actualizar la publicaion ${err}`})
        res.status(200).send({user:userUpdated})
    })
}
function deletePublicacion(req,res){
    var idPublicacion=req.params.idPublicacion
    publicacion.findById(idPublicacion,(err,publicacion)=>{
        if(err) res.status(500).send({menssage:`Error al borrar la publicacion ${err}`})
        Publicacion.remove(err=>{
            if(err) res.status(500).send({message:`Error al borrar la publicacion ${err}`})
            res.status(200).send({message:`La publicaion fue eliminada`})
        })
    })
}
function insertPublicacion(req,res){
    console.log('POST /api/publicacion')
    console.log(req.body)
    let publicacion=new Publicacion()
    publicacion.ptexto=req.body.ptexto
    publicacion.pfecha=req.body.pfecha
    publicacion.user_id=req.body.user_id
    
    publicacion.save((err,PublicacionStored)=>{
        if(err){
            res.status(500).send({message:`Error al salvar en la BD: ${err}`})
        } 
        else{
            if(!PublicacionStored){
                res.status(404).send({message:`No se registro la Publicacion`})
            }
            else{
                res.status(200).send({publicacion:PublicacionStored})
            }
        }
    })
}



module.exports={
    getPublicacion,
    getPublicaciones,
    updatePublicacion,
    deletePublicacion,
    insertPublicacion
}