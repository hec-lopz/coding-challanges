function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
function getUserInput(prompt = '¿Piedra, papel o tijera?'){
    let input = window.prompt(`${prompt}`).toLowerCase();
    switch(input){
        case "piedra":
            return 0;
        case "papel":
            return 1;
        case "tijera":
            return 2;
        default:
            return input;
    }
}
function startGame(prompt){
    const user_int = getUserInput(prompt);
    const ia_input = getRandomInt(3);
    console.log(user_int);
    if(user_int === ia_input) {
        console.log('Fue un empate.')
        return startGame('Fue un empate. Inténtalo de nuevo:');
    } else {
        console.log(`user: ${user_int}, machine: ${ia_input}`);
        const resultado = compareInputs(user_int, ia_input);
        console.log(`${resultado[0]} La máquina sacó ${resultado[1]}`);
        return resultado[2];
    }
}
function compareInputs(user, machine) {
    if (user === 0) {
        switch(machine){
            case 1:
                return ["Perdiste.", "papel", 0]
            case 2:
                return ["Ganaste!", "tijera", 1]
        }
    } else if (user === 1) {
        switch(machine){
            case 0:
                return ["Ganaste!", "piedra", 1]
            case 2:
                return ["Perdiste.", "tijera", 0]
        }
    } else if (user === 2){
        switch(machine){
            case 0:
                return ["Perdiste.", "piedra", 0]
            case 1:
                return ["Ganaste!", "papel", 1]
        }
    } else {
        console.log(`Ocurrió un problema, ${user} no existe`)
    }
}
function multipleGames(rounds = 1){
    let user_wins = 0;
    let machine_wins = 0;
    debugger
    while (!(user_wins > (rounds/2) || machine_wins > (rounds/2)) ){
        debugger
        let match_result = startGame();
        if (match_result === 0) {
            machine_wins++
        } else {
            user_wins++
        }
    }
    if (user_wins > machine_wins){
        console.log(`Felicidades, ganaste ${user_wins} ronda(s)`)
    } else {
        console.log(`Lo siento, perdiste ${machine_wins} ronda(s)`)
    }
    
}

multipleGames()