
// recordatorio: copiar apikey para que funcione


const consultar = document.getElementById('boton');

function theWeather(){

    let ciudadQueQuiero = document.getElementById('casilla').value;

    let xhr = new XMLHttpRequest();

    // en este punto configuro lo q se va a hacer, llamar a esa url
    xhr.open('GET', `http://api.openweathermap.org/data/2.5/weather?q=${ciudadQueQuiero}&appid=${apiKey}&units=metric&lang=sp`);  
      // ejecuta las instrucciones que he especificado anteriormente 
    xhr.send();


    xhr.onload = function(){
        if(xhr.status != 200 ){
            console.log(`Ha ocurrido un error ${xhr.status} y mensaje ${xhr.statusText}`);
        }else{
            console.log(`Respuesta`, xhr.response);
            // nos devuelve un objeto tipo JSON y lo tenemos que parsear para poderlo usar u lo guardamos en una constante
            const ciudadParseada = JSON.parse(xhr.response);
            console.log(ciudadParseada);
            // accedo a diferentes propiedades
            // console.log(`El tiempo de la ciudad es ${ciudadParseada.weather[0].description}`);
            let resultado = document.getElementById('resultado');
            let insertame = `
            <span>${ciudadParseada.weather[0].description}</span>
            <span><img src="https://openweathermap.org/img/wn/${ciudadParseada.weather[0].icon}@2x.png"></span>
            <span>La temperatura es ${ciudadParseada.main.temp}</span>
            <span>Sensación térmica ${ciudadParseada.main.feels_like}</span>
            <span>Humedad ${ciudadParseada.main.feels_like}</span>
            `;
            resultado.innerHTML = insertame;
        }
    };



}

consultar.addEventListener('click',()=> theWeather())


// OTRAS FORMAS - OTRAS SOLUCIONES. Toodas dentro del else


// Una forma de sacar de la funcion el objeto hago un array vacio
// const arrayvacio = [];
// // y desde dentro del else hago un 

// arrayvacio.push(ciudadparseada)

//// y tendria el objeto dentro de arrayvacio

// /////////////////////////////////////////////////////////////////////////////////////////

// Otra forma seria dentro del else hago , lo añado como propiedad del objeto

// xhr.miciudad = ciudadparseada