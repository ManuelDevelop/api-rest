'use strict'
const express= require('express')
const userCtrl=require('../controllers/user')
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
api.delete('/user',userCtrl.deleteUser)
//findByLog busca por pass and nCuenta
api.post('/login',userCtrl.findByLog)

//Metodos para la tabla de Comentarios


//exportamos esta clase como modulo para poder ocuoarla en otra clase
module.exports=api