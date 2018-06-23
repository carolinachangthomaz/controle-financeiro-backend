const CicloDePagamento = require('./cicloDePagamento')

CicloDePagamento.methods(['get', 'post', 'put', 'delete'])
CicloDePagamento.updateOptions({new:true, runValidators: true})
module.exports = CicloDePagamento