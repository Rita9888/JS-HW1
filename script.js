/* console.log('Hello, World!');
alert('Hello world alert!');
document.write('Hello (doc.wr)');
prompt('Hello promt');
console.info('Hello,info');
confirm('Hello confirm'); */

var block = document.getElementById("container");

function addColor(){
    if(block.style.background == "red"){
        block.style.background = "blue";
    }
    else{
        block.style.background = "red";
    }
}

var page = document.getElementById("wrapper");
var title = document.getElementsByTagName("h1")[0];
var block1 = document.getElementById("item1");
var block2 = document.getElementById("item2");
var block3 = document.getElementById("item3");
var boton = document.getElementsByTagName("a");
var newPage = document.getElementsByTagName("main");

function changeStyle(){
    page.style.backgroundImage = "url('./sky.jpg')";
    block1.style.backgroundColor = ("rgba(255, 255, 255, 0.5)");
    block2.style.backgroundColor = ("rgba(255, 255, 255, 0.5)");
    block3.style.backgroundColor = ("rgba(255, 255, 255, 0.5)");
    block1.style.color = "black";
    block2.style.color = "black";
    block3.style.color = "black";
    boton[0].style.backgroundColor = ("rgba(255, 255, 255, 0.5)");
    boton[1].style.backgroundColor = ("rgba(255, 255, 255, 0.5)");
    boton[2].style.backgroundColor = ("rgba(255, 255, 255, 0.5)");
}

function Delete(){
    page.style.display = "none";
    newPage[0].style.display = "flex";
}

//*********exs2******************
var termCountry = {
    Belarus: 2,
    Slovakia: 3,
    Germania: 15,
    France: 10,
    Poland: 7
}

function Term(){
    var sum = 0;
    for (var key in termCountry){
        sum += termCountry[key];
    }
    average = sum / Object.keys(termCountry).length;
    alert("Среднее значение температуры всех стран: " + average);
}

Term();

//*********exs3*********************

function maxTerm(term){
    var max = 0;
    for(var key in term){
        if(term[key]>max)
        max = term[key];
    }
    alert("Максимальная температура в " + max +"°C")
}

maxTerm(termCountry);