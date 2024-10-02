const connect = require("./connect")

module.exports = function testeConnect() {
  try {
    const query = `SELECT "conexão bem sucedida" AS MENSAGEM`
    connect.query(query, (err) => {
      if (err) {
        console.log("conexão não realizada", err)
        return;
      }
      console.log("Conexão realizada com Myqsl")
    })
    
  } catch(error) {
    console.error('Erro a executar a consulta:', error)
  }
}
