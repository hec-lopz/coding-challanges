const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const convertToSeconds = (hours, mins) => {
    let h = parseInt(hours);
    let m = parseInt(mins);
    let h_to_m = h * 60;
    let s = (m + h_to_m) * 60;
    return s;

}

rl.question("Introduce Horas con el formato 'hh'", function(h) {
    rl.question("Introduce Minutos con el formato 'mm'", (m) =>{
        console.log(`Introdujiste ${h}:${m}`);
        result = convertToSeconds(h, m);
        console.log(`Hay ${result} segundos en ${h} horas con ${m} minutos`)
        rl.close();
    })
})

rl.on("close", function() {
    console.log("\n stopped input")
    process.exit(0);
})