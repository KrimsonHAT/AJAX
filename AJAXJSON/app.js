const btn1 = document.getElementById('boton1');
const btn2 = document.getElementById('boton2');


btn1.addEventListener("click",function(){
    // creamos el objeto xmlhttprequest
    const xhr  = new XMLHttpRequest();
    // abrimos una conexión
    xhr.open('GET','empleado.json',true);

    // una vez que carga ejecutamos una funcion

    xhr.onload = function (){
        if(this.status===200){
        const persona = JSON.parse(this.responseText);
        console.log(persona);
        const htmlTemplate = `
            <ul>
                <li>EMPRESA: ${persona.empresa}</li>
                <li>ID: ${persona.id}</li>
                <li>NOMBRE: ${persona.nombre}</li>
                <li>TRABAJO: ${persona.trabajo}</li>
            </ul>
        `;
        document.getElementById('empleado').innerHTML = htmlTemplate;
        }
    }
    xhr.send();
});

btn2.addEventListener('click',function(){
    // Instanciamos el objeto xmlhttprequest
    const xhr = new XMLHttpRequest();

    // CReamos la conexion

    xhr.open('GET','empleados.json',true);

    // una vez que se cargue ejecuta esta función 

    xhr.onload = function(){
        if(this.status ===200){
            const personas = JSON.parse(this.responseText);
            let htmlTemplate = '';
            personas.forEach(persona => {
                htmlTemplate += `
                <ul>
                    <li>EMPRESA: ${persona.empresa}</li>
                    <li>ID: ${persona.id}</li>
                    <li>NOMBRE: ${persona.nombre}</li>
                    <li>TRABAJO: ${persona.trabajo}</li>
                </ul>
                
                
                
                `;
            });
            document.getElementById('empleados').innerHTML = htmlTemplate;
        }
    }

    xhr.send();



});