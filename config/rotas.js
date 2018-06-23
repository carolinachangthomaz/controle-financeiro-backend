const express = require('express')

module.exports = function(server){
    const rotas = express.Router()
    server.use('/api', rotas)

   const cicloDePagamentoService = require('../api/ciclodePagamento/cicloDePagamentoService')
   cicloDePagamentoService.register(rotas, '/ciclodepagamento')

   const cicloDeSumarioService = require('../api/sumarioDePagamento/sumarioDePagamentoService')
   rotas.route('/sumarioDePagamento').get(cicloDeSumarioService.getSumario)
}