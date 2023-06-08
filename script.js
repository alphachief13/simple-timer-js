let sec = 0;
let min = 0;
let hrs = 0;
let interval;
let intervalo2;
let intervalo3;
let ligado = false;
let pausado = false;
let velStr = "Normal (1x)";
let velocidadeTempo = 1000;
let vezesNoLow = 0;
let textoh1 = document.getElementById("time")
textoH2(velStr);

function resetInterval(){
    clearInterval(interval);
    interval = setInterval(add, velocidadeTempo);
}

function textoH1(hrs,min,sec){
    textoh1.innerText = addZero(hrs)+":"+addZero(min)+":"+addZero(sec);
}
function textoH2(value){
    document.getElementById("speed").innerText = "Speed: " + value;
}

function verificaPause(){
    pausado === true ? document.getElementById("start-button").textContent="Continue" : document.getElementById("start-button").textContent="Start";
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
        resetInterval();
    }
    verificaPause();
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
    textoH1(hrs,min,sec);
}

function start(){
    clearInterval(intervalo2);
    clearInterval(intervalo3);
    textoh1.style.opacity = 1;
    clock();
}

function pisca(){
    setTimeout(textoh1.style.opacity = 0, 750)
}

function naoPisca(){
    setTimeout(textoh1.style.opacity = 1, 750)
}

function pause(){
    if(ligado === true){
        clearInterval(interval);
        ligado = false;
        pausado = true;
        intervalo2 = setInterval(pisca,500)
        intervalo3 = setInterval(naoPisca,1000)
    }
    verificaPause();
}

function stop(){
    clearInterval(interval);
    ligado = false;
    pausado = false;
    sec = 0;
    min = 0;
    hrs = 0;
    textoH1(hrs,min,sec);
    verificaPause();
}

function incVel(){
    vezesNoLow = 0;
    switch(velocidadeTempo){
        case 1000:
            velocidadeTempo = 100;
            velStr = "Fast (10x)";
            break;
        case 100:
            velocidadeTempo = 10;
            velStr = "Very fast (100x)";
            break;
        case 10:
            velocidadeTempo = 1;
            velStr = "Extreme (1000x)";
            break;
        }
        ligado === true ? resetInterval() : null;
        textoH2(velStr);
}

function decVel(){
    switch(velocidadeTempo){
        case 1:
            velocidadeTempo = 10;
            velStr = "Very Fast (100x)";
            break;
        case 10:
            velocidadeTempo = 100;
            velStr = "Fast (10x)";
            break;
        case 100:
            velocidadeTempo = 1000;
            velStr = "Normal (1x)";
            break;
        }
    if(ligado === true){
        if(velocidadeTempo === 1000){
            if(vezesNoLow === 0){
                resetInterval();
                vezesNoLow++;
            }
        }
        velocidadeTempo != 1000 ? resetInterval() : null;
    }
    textoH2(velStr);
}