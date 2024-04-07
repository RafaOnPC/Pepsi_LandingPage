//Captura de elementos
const imgMayor = document.querySelector('.pepsi');
const section = document.querySelector('.sec');

document.querySelector('#pepsi_1').addEventListener('click', () => {

    //Cambiar la imagen prinicipal
    imgMayor.src = 'img/pepsi001.png';

    //Cambiar el fondo de pantalla
    section.style.background = '#0062be';

});

document.querySelector('#pepsi_2').addEventListener('click', () => {

    //Cambiar la imagen prinicipal
    imgMayor.src = 'img/pepsi002.png';

    //Cambiar el fondo de pantalla
    section.style.background = '#e60c2c';

});

document.querySelector('#pepsi_3').addEventListener('click', () => {

    //Cambiar la imagen prinicipal
    imgMayor.src = 'img/pepsi003.png';

    //Cambiar el fondo de pantalla
    section.style.background = '#1e1e1e';
    
});