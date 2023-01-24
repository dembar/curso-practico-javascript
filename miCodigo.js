const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

form.addEventListener('submit', btnOnClick);

function btnOnClick(event){
    //console.log({event});
    event.preventDefault();
    const sumaInput = +input1.value + +input2.value;
    pResult.innerText = "Resultado = "+sumaInput;
}




/* console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});

h1.innerHTML =  'Este es un mal chiste <br> Feo';//nos permite modificar el HTML del elemento seleccionado, con innerHTML añado codio HTML
h1.innerText =  'Este es un mal chiste <br> Feo';//con innerText convierto todo a texto y prodejo mi pagina. 
//console.log(h1.getAttribute('pantalla'));
//h1.setAttribute('pantalla','rojo')
h1.classList.add('rojo');
h1.classList.remove('rojo');
//toggle
//contains

input.value = "456";
const img = document.createElement('img');
img.setAttribute('src', 'https://static-cdn.jtvnw.net/jtv_user_pictures/bb818674-81fe-4324-a0e2-76aa32f861b7-profile_image-150x150.png');
console.log(img);
pid.innerHTML="";
pid.appendChild(img); */
