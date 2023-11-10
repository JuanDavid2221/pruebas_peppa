
function valide(msg) {
    let contador = 0;
    for (let index = 0; index < msg.length; index++) {
        if (msg[index] == "a" || msg[index] == "e" || msg[index] == "i" || msg[index] == "o" || msg[index] == "u") {
            contador++;
        }
    }
    return contador;
 }
 module.exports = valide;
