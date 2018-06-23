const _ = require('lodash')
const CicloDePagamento = require('./cicloDePagamento')

CicloDePagamento.methods(['get', 'post', 'put', 'delete'])
CicloDePagamento.updateOptions({new:true, runValidators: true})
CicloDePagamento.after('post', sendErrorsOrNext).after('put',sendErrorsOrNext)

function sendErrorsOrNext(req, res, next){
    const bundle = res.locals.bundle

    if(bundle.errors){
        var errors = parseErrors(bundle.errors)
        res.status(500).json({errors})
    }else{
        next()
    }
}

function parseErrors(nodeRestFulErrors){
    const errors = []
    _.forIn(nodeRestFulErrors, error => errors.push(error.message))
    return errors
}

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