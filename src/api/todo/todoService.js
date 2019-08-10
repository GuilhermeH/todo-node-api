const Todo = require('./todo');

Todo.methods(['get', 'post', 'put', 'delete'])

//config necessárias pq:
// 'new:true' para que biblioteca retorne apenas quando PUT, o objeto NOVO que está sendo atualizado (por default ele retorna o antigo ´\O/`)
// 'runValidators: true' por default, apenas quando PUT, a lib não valida as configs do esquema

Todo.updateOptions({ new: true, runValidators: true })

module.exports = Todo
