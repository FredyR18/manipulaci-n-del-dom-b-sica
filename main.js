
//en la primera linea tomamos el elemento boton por su id.
var holaMundo = document.getElementById('boton');
//En la siguiente linea le damos un evento al boton
    holaMundo.addEventListener('mousemove', ()=>{
    alert('Hello Worldddd, you gave click¡¡');
    document.getElementById('texto').innerHTML = 'Acabas de dar click, es genial, felicitaciones!!';

    });
