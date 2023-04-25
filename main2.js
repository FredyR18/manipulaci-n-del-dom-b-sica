// const p = document.querySelector('p');
// const parrafo = document.getElementById('parrafo');

// console.log({
//     h1,
//     p,
//     parrafo,
// });

// h1.innerText = 'Pato Loco';
// p.innerHTML = 'Sigo teniendo style';
// console.log(p.getAttribute('class'));

// const img = document.createElement('img');
// img.setAttribute('src', 'https://images.pexels.com/photos/13235422/pexels-photo-13235422.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load');
// console.log(img);
// parrafo.append(img);

const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

btn.addEventListener('click', btnOnClick);

function btnOnClick(){
    const sumaInputs = input1.value + input2.value;
    pResult.innerText = "El resultado es: " + sumaInputs;
}