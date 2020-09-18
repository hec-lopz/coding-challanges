const { read } = require('fs');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const looper = (phrase, times) => {
    if (times === 1){
        return phrase
    } else {
        return phrase += ` ${looper(phrase, times-1)}`
    }
}

rl.question('Introduce la palabra o frase que quieres repetir: ', (phrase) => {
    rl.question('¿Cuántas veces quieres repetirlo?: ', (repeat) => {
        let multiplier = parseInt(repeat);
        let final_phrase = looper(phrase, multiplier);
        console.log(final_phrase);
        rl.close();

    })
})

rl.on("close", () => {
    console.log('Gracias por tu visita. c:');
    process.exit(0);
})

// OUTPUT:
// Introduce la palabra o frase que quieres repetir: Platzi
// ¿Cuántas veces quieres repetirlo?: 5
// Platzi Platzi Platzi Platzi Platzi
// Gracias por tu visita. c: