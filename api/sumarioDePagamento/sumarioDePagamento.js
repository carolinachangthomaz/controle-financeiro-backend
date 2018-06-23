const _ = require('lodash')
const CicloDePagamento = require('../ciclodePagamento/cicloDePagamento')

function getSumario(req,res){
    CicloDePagamento.aggregate({
        $project:{credito: {$sum: "$creditos.valor"}, debito: {$sum: "$debitos.valor"}}
    },{
        $group:{_id:null, credito:{$sum: "$creditos"}, debito:{$sum: "$debitos"}}
    },{
        $project:{_id:0, credito:1,debito:1}
    },function(error, result){
        if(error){
            res.status(500).json({errors:[error]})
        }else{
            res.json(_.defaults(result[0],{credito: 0,debito: 0}))
        }
    })
}

module.exports = { getSumario }