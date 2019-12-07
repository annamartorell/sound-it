function carregarNom() {
    var nom = document.getElementById("caixaText").value;
    document.getElementById("nomJugador").innerHTML = "<p>" + nom + "</p>";
    document.getElementById("pantalla2").style.opacity = 0;
    document.getElementById("pantalla2").style.pointerEvents = "none";
}



function move() {
    var elem = document.getElementById("myBar");
    var width = 0;
    var id = setInterval(frame, 50);

    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }

    setTimeout(cambiarPag, 5000);
}

function cambiarPag() {
    document.getElementById("pantalla1").style.opacity = 0;
    document.getElementById("pantalla1").style.pointerEvents = "none";


}

function resposta1(resposta, id) {

    if (resposta != pregRes[i].correcte) {
        document.getElementById(id).style.backgroundColor = "#196075";

        vidas = vidas - 1;
    } else {
        aciertos = aciertos + 1;
    }

    document.getElementById('resposta' + pregRes[i].correcte).style.backgroundColor = "#EC7807";
    i = vAlea.shift();
    setTimeout(generaPregunta, 1500);


}






var vAlea = new Array(30);
for (i = 0; i < 30; i++)
    vAlea[i] = i;
vAlea = vAlea.sort(
    function () {
        return Math.random() - 0.5;
    });
var i = vAlea.shift();



function generaPregunta() {


    if (vidas < 0) {
        document.getElementById("hasPerdut").style.display = "block";
        document.getElementById("puntuacio").innerHTML = aciertos;
    } else {
        if (aciertos == 10) {
            document.getElementById("hasGuanyat").style.display = "block";
        } else {

            document.getElementById("punts").innerHTML = aciertos;
            document.getElementById("resposta1").style.backgroundColor = "#D8D8D8";
            document.getElementById("resposta2").style.backgroundColor = "#D8D8D8";
            document.getElementById("resposta3").style.backgroundColor = "#D8D8D8";
            document.getElementById("resposta4").style.backgroundColor = "#D8D8D8";

            document.getElementById("audio").innerHTML = "<audio src='" + pregRes[i].musica + "' autoplay> </audio>";
            document.getElementById("preguntaJS").innerHTML = "<h3>" + pregRes[i].pregunta + "</h3>";
            document.getElementById("resposta1").innerHTML = pregRes[i].resposta1;
            document.getElementById("resposta2").innerHTML = pregRes[i].resposta2;
            document.getElementById("resposta3").innerHTML = pregRes[i].resposta3;
            document.getElementById("resposta4").innerHTML = pregRes[i].resposta4;



            document.getElementById("divVidas").innerHTML = "";

            for (j = vidas; j >= 0; j--) {

                corason = document.createElement('img');
                corason.setAttribute("src", "img/Corazon.svg.png");
                document.getElementById("divVidas").appendChild(corason);

            }
        }
    }
}

function tornaJugar() {

    vidas = 2;
    aciertos = 0;
    generaPregunta();
    document.getElementById("pantalla2").style.opacity = 1;
    document.getElementById("pantalla2").style.pointerEvents = "inherit";
    document.getElementById("pantalla2").style.transition = "opacity 0s, pointer-events 0s";
    document.getElementById("hasPerdut").style.display = "none";
    document.getElementById("hasGuanyat").style.display = "none";
    document.getElementById("audio").innerHTML = "<audio src='" + pregRes[i].musica + "' > </audio>";
}



var vidas = 2;
var aciertos = 0;
