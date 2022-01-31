//variables globales y selectores del DOM acortados en variables
let numerin = 6;
let colors = generadorRandom(numerin);
let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let colorDisplay = document.querySelector("#colorDisplay");
let message = document.querySelector("#message");
let h1 = document.querySelector("h1");
let reset = document.querySelector("#reset");
let modoFacil = document.querySelector("#easy");
let modoDificil = document.querySelector("#hard");

colorDisplay.textContent = pickedColor;

modoFacil.addEventListener("click", function () {
	modoFacil.classList.add("active");
	modoDificil.classList.remove("active");
	numerin = 3;
	colors = generadorRandom(numerin);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(let i=0 ; i<squares.length ; i++){
    	squares[i].style.backgroundColor = colors[i];
    	if (i > 2) {
    		squares[i].style.display = "none";
    	}
    }
});
modoDificil.addEventListener("click", function () {
	modoDificil.classList.add("active");
	modoFacil.classList.remove("active");
	numerin = 6;
	colors = generadorRandom(numerin);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(let i=0 ; i<squares.length ; i++){
    	squares[i].style.backgroundColor = colors[i];
    	if (squares[i].style.display === "none"){
    		squares[i].style.display = "block";	
    	}
    	squares[i].style.backgroundColor = colors[i];
    
    }
});

for(let i=0 ; i<squares.length ; i++){
	// Agregar colores a los cuadrados
	squares[i].style.backgroundColor = colors[i];

	// agrega listeners a los cuadros
	// listener de click
	squares[i].addEventListener("click", function(){
    // toma color de cuadro elegido
    let clickedColor = this.style.backgroundColor;
    	// compara color ganador con el clickeado
	    if(clickedColor === pickedColor){
	    	message.textContent = "Correcto!";
	    	reset.textContent = "Click intentar de nuevo";//sobrescrible el mensaje
	    	changeColors(clickedColor);
	    } else{
	    	this.style.backgroundColor = "#232323";
	    	message.textContent = "Intenta nuevamente!";
	    }
	    
	});
}

reset.addEventListener("click", function(){
    // Genera 6 nuevas random colors
    colors = generadorRandom(numerin);
    // Elegir nuevo ganador
    pickedColor = pickColor();
    // cambiar mensaje de pantalla que contiene nuevo color
    colorDisplay.textContent = pickedColor;
    message.textContent = "";
    this.textContent = "Reset Colours";
    // Asignar 6 nuevos colores a los cuadros
    for(let i=0 ; i<colors.length ; i++){
    	squares[i].style.backgroundColor = colors[i];
    }
    h1.style.background = "linear-gradient(to right, red, orange, yellow, green, blue)";
    reset.textContent = "Reset Colours";
    });

function changeColors(colour){
	h1.style.background = colour;
	for (let i=0 ; i<squares.length ; i++){
		squares[i].style.backgroundColor = colour;		
	}
}

function pickColor(){
	let number = Math.floor(Math.random() * colors.length);
	return colors[number];
}

function generadorRandom(numeros){
	let matriz = [];
	// Agregar colores a la matriz
	for(let i=0 ; i<numeros ; i++){
		matriz.push(randomColor());
	}
	return matriz;
}

function randomColor(){
	// random rojo de 0 a 255
	let red = Math.floor(Math.random() * 256);
	// random verde de 0 a 255
	let green = Math.floor(Math.random() * 256);
	// random azul de 0 a 255
	let blue = Math.floor(Math.random() * 256);
	let coloreo = "rgb(" + red + ", " + green + ", " + blue + ")";
	return coloreo;
}

//--------------añadir pista o hint (opcional)---------------------
/* let pista=document.querySelector("#pista")
pista.addEventListener("click",function () {
	alert("entrooo")
}) */