'use strict'

//importamis los modelos
const User=require('../models/foto')

function getFoto(req,res){
    let idFoto=req.params.idFoto
    Foto.findById(idFoto,(err,foto)=>{
        if(err) return res.status(500).send({message:`error al realizar la peticion ${err}`})
        if(!foto) return res.status(404).send({message:`La Foto no existe`})
        res.status(200).send({foto})
    })
}

function getFotos(req,res){
    Foto.find({},(err,fotos)=>{
        if(err) return res.status(500).send({message:`error al realizar la peticion ${err}`})
        if(!fotos) return res.status(404).send({message:`No existe la Foto`})
        res.status(200).send({fotos})
    })
}

function updateFoto(req,res){
    var idFoto= req.params.idFoto
    var update=req.body
    Foto.findByIdAndUpdate(idFoto,update,(req,fotoUpdated)=>{
        if(err) res.status(500).send({message:`Error al actualizar la Foto ${err}`})
        res.status(200).send({foto:fotoUpdated})
    })
}
function deleteFoto(req,res){
    var idFoto=req.params.idFoto
    Foto.findById(idFoto,(err,foto)=>{
        if(err) res.status(500).send({menssage:`Error al borrar el usuario ${err}`})
        Foto.remove(err=>{
            if(err) res.status(500).send({message:`Error al borrar la Foto ${err}`})
            res.status(200).send({message:`La Foto fue eliminada`})
        })
    })
}
function insertFoto(req,res){
    console.log('POST /api/foto')
    console.log(req.body)
    
    let foto=new Foto()
    
    user.save((err,fotoStored)=>{
        if(err){
            res.status(500).send({message:`Error al salvar en la BD: ${err}`})
        } 
        else{
            if(!fotoStored){
                res.status(404).send({message:`No se registro la Foto`})
            }
            else{
                res.status(200).send({foto:fotoStored})
            }
        }
    })
}


module.exports={
    getFoto,
    getFotos,
    updateFoto,
    deleteFoto,
    insertFoto
}