let aside = document.querySelector('aside');
let mnspt = document.querySelector('.title');
let seta = document.querySelector('.title i');
let options = document.querySelector('.options');

mnspt.onclick = () => {
    click();
}


function click (){
    if(options.classList.length == 1){
        seta.classList.add('girar');
        options.classList.add('optionsVisible');
        mnspt.style.top = 'calc(25% - 70px)';
        aside.style.backgroundColor = 'rgba(0, 171, 244, 0.7)'
        
    }
    else{
        seta.classList.remove('girar');
        options.classList.remove('optionsVisible');
        mnspt.style.top = 'calc(50% - 70px)';
        aside.style.backgroundColor = 'rgba(0, 171, 244, 0.2)'
    }
}

setTimeout(function(){
    aside.classList.remove('aside1');
}, 500);

let ancora1 = document.querySelector('.options h5:first-child');
let ancora2 = document.querySelector('.options h5:nth-child(2)');
let ancora3 = document.querySelector('.options h5:nth-child(3)');
let ancora4 = document.querySelector('.options h5:last-child');
let icon1 = document.querySelector('.options h5:first-child i');
let icon2 = document.querySelector('.options h5:nth-child(2) i');
let icon3 = document.querySelector('.options h5:nth-child(3) i');
let icon4 = document.querySelector('.options h5:last-child i');
let consultar = document.querySelector('.consultar');
let abrir = document.querySelector('.abrir');

if(icon1.style.color = 'white'){
    abrir.style.display = 'none';
}
else{
    abrir.style.display = 'flex';
}


ancora1.onclick = () =>{
    location.href = "#consultar"
    icon1.style.color = 'white';
    icon2.style.color = 'transparent';
    icon3.style.color = 'transparent';
    icon4.style.color = 'transparent';
    consultar.style.display = 'flex';
    abrir.style.display = 'none';
}

ancora2.onclick = () =>{
    location.href = "#abrir";
    icon1.style.color = 'transparent';
    icon2.style.color = 'white';
    icon3.style.color = 'transparent';
    icon4.style.color = 'transparent';
    consultar.style.display = 'none';
    abrir.style.display = 'flex';
}

ancora3.onclick = () =>{
    location.href = "#alterar";
    icon1.style.color = 'transparent';
    icon2.style.color = 'transparent';
    icon3.style.color = 'white';
    icon4.style.color = 'transparent';
    consultar.style.display = 'none';
    abrir.style.display = 'none';
}

ancora4.onclick = () =>{
    location.href = "#ajuda";
    icon1.style.color = 'transparent';
    icon2.style.color = 'transparent';
    icon3.style.color = 'transparent';
    icon4.style.color = 'white';
    consultar.style.display = 'none';
    abrir.style.display = 'none';
}

let table1 = document.querySelector('.table h5:first-child');
let table2 = document.querySelector('.table h5:nth-child(2)');
let table3 = document.querySelector('.table h5:last-child');
let abertos = document.querySelector('.abertos');
let abertos1 = document.querySelectorAll('.dados');
let setaBaixo = document.querySelector('.fa-arrow-alt-circle-down');
let setaCima = document.querySelector('.fa-arrow-alt-circle-up');

if(abertos1.length > 5){
    setaBaixo.style.color = 'white';
    setaCima.style.color = 'white';
}
else{
    setaBaixo.style.color = 'rgba(255, 255, 255, 0.7)';
    setaCima.style.color = 'rgba(255, 255, 255, 0.7)';
}

table1.onclick = () => {
    table1.style.color = 'white';
    table1.style.backgroundColor = 'rgba(0, 171, 244, 0.7)';
    table2.style.color = 'black';
    table2.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
    table3.style.color = 'black';
    table3.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';   
    abertos.style.visibility = 'visible';
    setaBaixo.style.visibility = 'visible';     
    setaCima.style.visibility = 'visible';        
}

table2.onclick = () => {
    table2.style.color = 'white';
    table2.style.backgroundColor = 'rgba(0, 171, 244, 0.7)';
    table1.style.color = 'black';
    table1.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
    table3.style.color = 'black';
    table3.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
    abertos.style.visibility = 'hidden';   
    setaBaixo.style.visibility = 'hidden';    
    setaCima.style.visibility = 'hidden';     
}

table3.onclick = () => {
    table3.style.color = 'white';
    table3.style.backgroundColor = 'rgba(0, 171, 244, 0.7)';
    table2.style.color = 'black';
    table2.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
    table1.style.color = 'black';
    table1.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';   
    abertos.style.visibility = 'hidden'; 
    setaBaixo.style.visibility = 'hidden';
    setaCima.style.visibility = 'hidden';
         
}
	


