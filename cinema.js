let cinema = "Cine House";

/* let filmes = require("./node_modules/filmes/index");

console.log(filmes); */

/* let moment = require("moment");
let data = moment().format('MMM do YY')
console.log(data); */

/* let moduloNativo = require("http");
let moduloTerceiro = require("axios");
let moduloProprio = require("./minhaFuncao");
 */

/* let fs = require("fs");
let dados = fs.readFileSync(__dirname + "/dados.txt", "utf-8");
console.log(dados);
 */

let filmes = require("./database/catalogo.json");
let filmesStr = JSON.stringify(filmes);
let filmesJS = JSON.parse(filmesStr)
console.log(filmesJS);
