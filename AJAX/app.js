document.getElementById("cargar").addEventListener("click",cargarDatos);


function cargarDatos() { 
    // cREAR EL OBJETO xmlhttrequest
    const xhr = new XMLHttpRequest();

    // abrir una conexion
    xhr.open('GET','datos.txt',true);

    /*------------Forma Vieja de hacerlo---------*/

    /* ready states 
       ready status
    0- No inicializado
    1-conexion establecida
    2- Recibido el request
    3-Procesando
    4-Respuesta lista
    
    */ 
    xhr.onreadystatechange = function () { 
            console.log(`Estado: ${this.readyState}`)
            if(this.readyState === 4 && this.status ===200){
                // console.log(this.responseText);
            }
     }
    






    /*------------------ Forma de hacerlo Nueva-----------------*/
    // una vez que carga 
    /*
    xhr.onload = function (){
        // 200 : correcto | 403 :request prohbido | 404 : not found
        if(this.status ===200){
           document.getElementById('listado').innerHTML =`
           <h1>${this.responseText}</h1>
           ` 

        }
    }
*/
    xhr.send();
 };