const ask = ()=>{

    //Leer pregunta
    const questionInput = document.getElementById("question");
    const answerInput = document.getElementById('answer');
    if (questionInput.value !== ""){
    //Recibir respuesta al preguntar a la bola magica
    let answer = magicBall();
    //Imprimir resultado
    answerInput.value = answer;
    }
    else {
        answerInput.value = "Pregunta algo 😉";
    }
};

//Funcion bola magica
const magicBall = () => {
    let randomNumber = Math.floor(Math.random() * 8);
    let eightBall = '';
    switch (randomNumber){
    case 0:
        eightBall = 'Es cierto';
        break;
    case 1:
        eightBall = 'Es decididamente asi';
        break;
    case 2:
        eightBall = 'Intenta otra vez';
        break;
    case 3:
        eightBall = 'No puedo predecir ahora';
        break;
    case 4:
        eighBall = 'No cuentes con ello';
        break;
    case 5:
        eightBall = 'Mis fuentes dicen que no';
        break;
    case 6:
        eightBall = 'Las perspectivas no son buenas';
        break;
    case 7:
        eightBall = 'Las señales apuntan a que si';
        break;
    }
    return eightBall;
};