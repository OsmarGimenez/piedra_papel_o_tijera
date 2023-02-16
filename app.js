
// variables constantes de opciones
const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

//variables constantes de resultados
const TIE = 0;
const WIN = 1;
const LOST = 2;

// se recogen los botones por los id del html
const rockBtn= document.getElementById("rock");
const paperBtn= document.getElementById("paper");
const scissorsBtn= document.getElementById("scissors");
const resultText = document.getElementById("start-text")
const userImg = document.getElementById("user-img")
const machineImg = document.getElementById("machine-img")


//a cada uno de ellos se les da un event listener

rockBtn.addEventListener("click",()=>{
    //para poder ver por consola la entrada
    //console.log("rock")
    play(ROCK);
})

paperBtn.addEventListener("click",()=>{
    play(PAPER);
})

scissorsBtn.addEventListener("click",()=>{
    play(SCISSORS);
})

//se crea una funcion para ver si ganaste
function play(userOption){
    /* aca se cambiara la imagen de las opciones seleccionadas por la
    por el usuario*/
    userImg.src = "images/"+userOption+".svg";

    resultText.innerHTML = "Chossing!"

    //intervalo para que cambie la imagen cada milesima de segundo

    const interval = setInterval(function(){
        const machineOption = calcMachineOption();
        machineImg.src = "images/"+machineOption+".svg";
        
    },200);
    

    // este setTimeout sirve para retrasar lo que hace la funcion de adentro
    setTimeout(function(){

        clearInterval(interval)//paramos el intervalo de arriba

        const machineOption = calcMachineOption();//tiene una funcion mas abajo
        const result = calcResult(userOption,machineOption)
    
        /* aca se cambiara la imagen de las opciones seleccionadas por la
        maquina */
    
        machineImg.src = "images/"+machineOption+".svg";
    
        // respuestas segun resultados
    
        switch(result){
            case TIE:
                resultText.innerHTML = "You have tie"
                break;
    
            case WIN:
                resultText.innerHTML = "You win!!!"
                break;
    
            case LOST:
                resultText.innerHTML = "You lost"
                break;
    
        }

    },1500);
    
}

// funcion que se utiliza en la funcion play para obtener el resultado
function calcResult(userOption,machineOption){
    
    if (userOption == machineOption){
        return TIE;
    }else if(userOption === ROCK){
        if(machineOption === PAPER)return LOST 
        if(machineOption === SCISSORS)return WIN
    }else if(userOption === PAPER){
        if(machineOption === ROCK)return WIN 
        if(machineOption === SCISSORS)return LOST
    }else if(userOption === SCISSORS){
        if(machineOption === ROCK)return LOST 
        if(machineOption === PAPER)return WIN
    }
}

function calcMachineOption(){
    // consigue un numero aleatorio
    const number = Math.floor(Math.random()*3);

    switch(number){
        case 0:
            return ROCK
        case 1:
            return PAPER
        case 2:
            return SCISSORS
    }
}