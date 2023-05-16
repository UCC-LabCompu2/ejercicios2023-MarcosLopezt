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

/* function convertirGR(id){
    if(id=="grados"){
        let gr: document.getElementById(elementid:"grados").value;
    }

}
*/