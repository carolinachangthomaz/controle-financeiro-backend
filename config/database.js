const mongoose = require('mongoose')
module.exports = mongoose.connect('mongodb://localhost/controle-financeiro')

mongoose.Error.messages.general.required = "O Atributo '{PATH}' é obrigatório."
mongoose.Error.messages.Number.min = "O valor '{VALUE}' informado é menor que o limite mínimo de '{MIN}.'"
mongoose.Error.messages.Number.max = "O valor '{VALUE}' informado é menor que o limite mínimo de '{MAX}.'"
mongoose.Error.messages.String.enum = "'{VALUE}' nãoé válido pata o atributo '{PATH}.'"