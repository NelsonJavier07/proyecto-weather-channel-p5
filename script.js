let boton = document.querySelector("button");
let entradaCiudad = document.querySelector("input");
//let ciudad = entradaCiudad.value;
//entradaCiudad.getAttribute("value");
//"Buenos Aires";
//`${entradaCiudad.value}`; 
 //console.log(`${entradaCiudad.value}`);
 //console.log(ciudad);

let mostrarCiudad = document.getElementById("ciudad");
let mostrarTemperatura = document.getElementById("temperatura");
let mostrarIcono = document.getElementById("wicon");
let mostrarDescripcion = document.getElementById("descripcion");
let icon;

function cargarCiudad() {
    $.getJSON(`https://api.openweathermap.org/data/2.5/weather?q=${entradaCiudad.value}&appid=95176c8edea30e33338e0eaddd53a916&units=metric&lang=es`, function(data) {
        mostrarCiudad.textContent = data.name;
        mostrarTemperatura.innerHTML = `<sup>${data.main.temp}°C</sup>`;
        icon = data.weather[0].icon;
        mostrarIcono.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
        mostrarDescripcion.textContent = `${data.weather[0].description}`;

        console.log(data.weather[0].description);
        console.log(icon);
        //console.log(`<sup>${data.main.temp}°C</sup>`);
        
    //console.log(data.weather[0].main);
})
}

boton.addEventListener("click", function (){
    document.querySelector(".container").style.visibility = "visible";
    cargarCiudad();
});


// para que funcione al apretar "enter"
boton.addEventListener("keydown", function (e) {
    console.log(e.key);
    if (e.key == 13) {
        document.querySelector(".container").style.visibility = "visible";
        cargarCiudad();
    }
});


//español
//"https://api.openweathermap.org/data/2.5/weather?q=San%20Francisco&appid=95176c8edea30e33338e0eaddd53a916&units=metric&lang=es"
//`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=95176c8edea30e33338e0eaddd53a916&units=metric&lang=es`

//`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=fdd533266e28101881f610f2b8f1ebe1`

//`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=1a9b3670ada3ece0551373f7325e028d`

//`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=dcec7df661b1e6b0edab51d796b7339c`



//`https://api.openweathermap.org/data/2.5/weather?q=canada&appid=fdd533266e28101881f610f2b8f1ebe1`


//formato de icono
//https://openweathermap.org/img/wn/10d@2x.png


//"https://api.openweathermap.org/data/2.5/weather?q=" + ciudad + "&appid=95176c8edea30e33338e0eaddd53a916&units=metric&lang=es"