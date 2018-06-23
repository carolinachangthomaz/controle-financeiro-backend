const restful = require('node-restful')
const mongoose = restful.mongoose


const creditoSchema = new mongoose.Schema({
    nome:{type:String,required: true},
    valor: {type: Number, min: 0, required: [true,"Informe o valor do crédito"]} 
})

const debitoSchema = new mongoose.Schema({
    nome:{type:String,required: true},
    valor: {type: Number, min: 0, required: [true,"Informe o valor do débito"]},
    status: {type: String, required: false, uppercase: true,
      enum: ['PAGO', 'PENDENTE', 'AGENDADO']}
})

const ciclodePagamentoSchema = new mongoose.Schema({
    nome:{type:String,required: true},
    mes: {type: Number, min: 1, max: 12, required: true},
    ano: {type: Number, min: 1970, max: 2100, required: true},
    creditos: [creditoSchema],
    debitos: [debitoSchema],
})


module.exports = restful.model('CicloDePagamento', ciclodePagamentoSchema)