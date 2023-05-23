/**
 * Convierte unidades entre metros, pulgadas, pies y yardas.
 * @method convertirUnidades
 * @param {string} id - Id del elemento input del html
 * @param {number} valor - Contiene el valor del input que ingresa el usuario
 */

convertirUnidades = (id,valor) => {
    let met, pul, pie, yar;
    if(isNaN(valor)){
        alert("El valor ingresado es incorrecto");
        met= "";
        pul = "";
        pie = "";
        yar = "";
    } else if (id==="metro"){
       pul= valor*39.3701;
       pie = valor*3.28884;
       yar = valor*1.09361;

    } else if(id==="pulgada"){
        met=valor*0.0254;
        pie= valor*0.0833333;
        yar = valor*3;

    }else if(id==="pie"){
        met= valor*0.3048;
        yar=valor*0,333333;
        pul=12;

    }else if (id=== "yardas"){
        met=valor*1.09361;
        pul=valor*0.0277778;
        pie=valor*0.333333;

    }
    document.lasUnidades.unid_pulgada.value = met;
    document.lasUnidades.unid_pulgada.value = pul;
    document.lasUnidades.unid_pie.value = pie;
    document.lasUnidades.unid_yarda.value = yar;
}

function convertirGR(id){
    let gr,rad;
    
    if(id=="grados"){
        gr=document.getElementById("grados").value;
        rad= (gr*Math.PI)/180;
    }else if(id=="radianes"){
        rad=document.getElementsById("radianes").value;
        gr= (rad*180)/Math.PI;
    }
    document.getElementById("grados").value= gr;
    document.getElementById("radianes").value=rad;
}

function mostrar_ocultar(valorMO){
    if(valorMO=="val_mostrar"){
        document.getElementById("divMO").style.display= `block`;
    }else if(valorMO=="val_ocultar"){
        document.getElementById("divMO").style.display=`none`;
    }

}

function calcularSuma(){
    var num1, num2;
    
    num1=Number(document.getElementsByName("sum_num1")[0].value);
    num2=document.getElementsByName("sum_num2")[0].value;
    document.getElementsByName("sum_total")[0].value=num1+Number(num2);
}

function calcularResta(){
    var num1,num2;

    num1= Number(document.getElementsByName("res_num1")[0].value);
    num2= Number(document.getElementsByName("res_num2")[0].value);
    document.getElementsByName("res_total")[0].value=num1-num2;
}

function calcularMulti(){
    var num1, num2;

    num1=Number(document.getElementsByName("mul_num1")[0].value);
    num2= Number(document.getElementsByName("mul_num2")[0].value);
    document.getElementsByName("mul_total")[0].value=num1*num2;
}

function calcularDiv(){
    var num1,num2;

    num1= Number (document.getElementsByName("div_num1")[0].value);
    num2= Number(document.getElementsByName("div_num2")[0].value);
    document.getElementsByName("div_total")[0].value=num1/num2;
}


let dibujarCirculoCuadrado = () => {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    let xMax= canvas.width;
    let yMax= canvas.height;
    ctx.fillstyle = "#333";
    //dibujar margen
    let margen = 15;
    ctx.fillRect(0+margen,yMax-40-margen,40,40);
    ctx.arc(xMax/2,yMax/2,100,0,2*Math.PI);
    ctx.stroke(); //dibujo de los bordes del circulo
    ctx.fill(); // pinto el circulo por dentro
}

let limpiarCanvas = () => {
    let canvas = document.getElementById("myCanvas");
    canvas.width = canvas.width;
}

var bandera;

let dibujar = () => {
    let canvas =document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d");


    let posx = event.clientX;
    let posy = event.clientY;
    console.log(posx,posy);

    canvas.onmousedown = function(){bandera=true};
    canvas.onmouseup = function (){bandera=false};

    if(bandera){
    ctx.fillRect(posx,posy,5,5);
    ctx.fill;
    }
}