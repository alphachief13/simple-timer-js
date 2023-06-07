let sec = 0;
let min = 0;
let hrs = 0;
let interval;
let ligado = false;
let pausado = false;
let velStr = "Normal (1x)";
let velocidadeTempo = 1000;
let vezesNoLow = 0;
document.getElementById("speed").innerText = "Speed: " + velStr;

function verificaPause(){
    if(pausado === true){
        document.getElementById("start-button").textContent="Continue";
    
    } else{
        document.getElementById("start-button").textContent="Start";
    
    }
}

function addZero(num){
    if(num < 10){
        return num = "0"+num;
    } else{
        return num;
    }
}

function clock(){
    if(ligado === false){
        add();
    }
    if(ligado === false){
        ligado = true;
        pausado = false;
        interval = setInterval(add, velocidadeTempo);
    }

    verificaPause()

}

function add(){
    sec++;
    if(sec > 59){
        min++;
        sec = 0;
    }
    if(min > 59){
        hrs++;
        min = 0;
    }
    document.getElementById("time").innerText = addZero(hrs)+":"+addZero(min)+":"+addZero(sec);
}

function start(){
    clock()
}

function pause(){
    if(ligado === true){
        clearInterval(interval);
        ligado = false;
        pausado = true;
    }

    verificaPause()
}

function stop(){
    clearInterval(interval);
    ligado = false;
    pausado = false;
    sec = 0;
    min = 0;
    hrs = 0;
    document.getElementById("time").innerText = addZero(hrs)+":"+addZero(min)+":"+addZero(sec);
    verificaPause()
}

function incVel(){
    vezesNoLow = 0;
    switch(velocidadeTempo){
        case 1000:
            velocidadeTempo = 100;
            velStr = "Fast (10x)"
            break;
        case 100:
            velocidadeTempo = 10;
            velStr = "Very fast (100x)"
            break;
        case 10:
            velocidadeTempo = 1;
            velStr = "Extreme (1000x)"
            break;
        }
    if(ligado === true){
        clearInterval(interval);
        interval = setInterval(add, velocidadeTempo);
    }
    document.getElementById("speed").innerText = "Speed: " + velStr;

}

function decVel(){
    switch(velocidadeTempo){
        case 1:
            velocidadeTempo = 10;
            velStr = "Very Fast (100x)"
            break;
        case 10:
            velocidadeTempo = 100;
            velStr = "Fast (10x)"
            break;
        case 100:
            velocidadeTempo = 1000;
            velStr = "Normal (1x)"
            break;
        }
    if(ligado === true){
        if(velocidadeTempo === 1000){
            if(vezesNoLow === 0){
                clearInterval(interval);
                interval = setInterval(add, velocidadeTempo);
                vezesNoLow++;
            }
        }
        
        if(velocidadeTempo != 1000){
            clearInterval(interval);
            interval = setInterval(add, velocidadeTempo);
        }
        
    }

    document.getElementById("speed").innerText = "Speed: " + velStr;

}