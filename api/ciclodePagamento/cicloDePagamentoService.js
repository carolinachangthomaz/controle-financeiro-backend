const CicloDePagamento = require('./cicloDePagamento')

CicloDePagamento.methods(['get', 'post', 'put', 'delete'])
CicloDePagamento.updateOptions({new:true, runValidators: true})

CicloDePagamento.route('contador', function(req, res, next){
    CicloDePagamento.count(function(error,value){
         if(error){
             res.status(500).json({errors:[error]})
         }else{
             res.json({value})
         }
    })
})

module.exports = CicloDePagamento