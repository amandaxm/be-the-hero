const express = require('express');
const { celebrate, Segments, Joi } =  require('celebrate');
const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')
const routes = express.Router()

routes.post('/sessions', SessionController.create)

routes.get('/ongs', OngController.index)

/**
 * Query
 * Routes
 * Body
 */

routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(), //string e obrigatorio
      email: Joi.string().required().email(),//endereco valido
      whatsapp: Joi.string().required().min(10).max(11),
      city:Joi.string().required(),
      uf: Joi.string().required().length(2),
    }) //COLOCAR VALIDAÇÃO. INDICAR OBJ
}), OngController.create);//validação da criacao dos dados


routes.get('/incidents', celebrate({
[Segments.QUERY]:Joi.object().keys({

    page: Joi.number(),
})




}) ,IncidentController.index)


routes.post('/incidents', IncidentController.create)


routes.delete('/incidents/:id', celebrate({

[Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().required(),

})



}),IncidentController.delete)

routes.get('/profile', celebrate({
[Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required()
}).unknown(),

}),ProfileController.index)


module.exports = routes
