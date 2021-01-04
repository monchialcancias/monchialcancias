/* alcancias.main.js */

let src_one = '../imgs/spiderman/frente.png';
let src_two = '../imgs/spiderman/lateral-izquierdo.png';
let src_three = '../imgs/spiderman/lateral-derecho.png';
let src_four = '../imgs/spiderman/superior.png';
let src_five = '../imgs/spiderman/superior-2.png';

function cambiarImagen(imagen){
    let imagen_cambiar = document.getElementById('cambiar');
    console.log(imagen_cambiar.getAttribute("src"));
    if (imagen == 1){
        imagen_cambiar.setAttribute("src", src_one);
    } else if (imagen == 2){
        imagen_cambiar.setAttribute("src", src_two);
    } else if (imagen == 3){
        imagen_cambiar.setAttribute("src", src_three);
    } else if (imagen == 4){
        imagen_cambiar.setAttribute("src", src_four);
    } else {
        imagen_cambiar.setAttribute("src", src_five);
    }
    
}