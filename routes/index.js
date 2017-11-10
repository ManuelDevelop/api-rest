'use strict'
const express= require('express')
const userCtrl=require('../controllers/user')
const publicacionCtrl=require('../controllers/publicacion')
const fotoCtrl=require('../controllers/foto')
const comentarioCtrl=require('../controllers/comentario')
const multipart=require('connect-multiparty')
const md_upload=multipart({uploadDir:'./uploads/avatar'})
const api= express.Router()

//desarollo de direcciones y llamada a los metodos del controller
//Metodos para la tabla usurio
//find all
api.get('/user',userCtrl.getUsers)
//find by nCuenta 
api.get('/user/:nCuenta',userCtrl.getUser)
//insert un nuevo usuario
api.post('/user',userCtrl.insertUser)
//actualizar un usuario
api.put('/user/:userid',userCtrl.updateUser)
//eliminar un usuario
api.delete('/user/:userid',userCtrl.deleteUser)
//findByLog busca por pass and nCuenta
api.post('/login',userCtrl.findByLog)
//subimos el avatar del usuario
api.post('/avatar/:userid',md_upload,userCtrl.uploadimg)

//Metodos para la tabla de Publicaciones
//find all
api.get('/publicacion',publicacionCtrl.getPublicaciones)
//find by nCuenta 
api.get('/publicacion/:publicaion_id',publicacionCtrl.getPublicacion)
//insert un nuevo usuario
api.post('/publicacion',publicacionCtrl.insertPublicacion)
//actualizar un usuario
api.put('/publicacion/:publicacion_id',publicacionCtrl.updatePublicacion)
//eliminar un usuario
api.delete('/publicacion',publicacionCtrl.deletePublicacion)

//Metodos para la tabla de Comentario
//find all
api.get('/comentario',comentarioCtrl.getComentario)
//find by nCuenta 
api.get('/comentario/:comentario_id',comentarioCtrl.getComentarios)
//insert un nuevo usuario
api.post('/comentario',comentarioCtrl.insertComentario)
//actualizar un usuario
api.put('/comentario/:comentario_id',comentarioCtrl.updateComentario)
//eliminar un usuario
api.delete('/comentario',comentarioCtrl.deleteComentario)


//Metodos para la tabla de Foto
//find all
api.get('/foto',fotoCtrl.getFoto)
//find by nCuenta 
api.get('/foto/:foto_id',fotoCtrl.getFotos)
//insert un nuevo usuario
api.post('/foto',fotoCtrl.insertFoto)
//actualizar un usuario
api.put('/foto/:foto_id',fotoCtrl.updateFoto)
//eliminar un usuario
api.delete('/foto',fotoCtrl.deleteFoto)



//exportamos esta clase como modulo para poder ocuoarla en otra clase
module.exports=api