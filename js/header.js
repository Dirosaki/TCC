let menu = document.querySelector('.burguer');
let barra1 = document.querySelector('.barra:nth-child(1)');
let barra2 = document.querySelector('.barra:nth-child(2)');
let barra3 = document.querySelector('.barra:nth-child(3)');
let nav = document.querySelector('nav');
let a1 = document.querySelector('nav a:first-child');
let a2 = document.querySelector('nav a:nth-child(2)');
let a3 = document.querySelector('nav a:nth-child(3)');
let a4 = document.querySelector('nav a:nth-child(4)');
let a5 = document.querySelector('nav a:nth-child(5)');
let a6 = document.querySelector('nav a:last-child');


menu.onclick = () => {
    barra1.classList.toggle('barrinha');
    barra2.classList.toggle('barrinha');
    barra3.classList.toggle('barrinha');
    nav.classList.toggle('navClick');
}

if(document.title == "SOFTECH - Início"){
    a1.style.color = '#00AAF4'
}

if(document.title == "SOFTECH - Clientes"){
    a2.style.color = '#00AAF4'
}

if(document.title == "SOFTECH - Sobre"){
    a3.style.color = '#00AAF4'
}

if(document.title == "SOFTECH - Suporte"){
    a4.style.color = '#00AAF4'
}

if(document.title == "SOFTECH - Contato"){
    a5.style.color = '#00AAF4'
}

if(document.title == "SOFTECH - Login"){
    a6.style.backgroundColor = 'rgb(0, 123, 255)'
}
