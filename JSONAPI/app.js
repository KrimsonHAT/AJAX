const cargarPosts = document.querySelector('#cargar');

cargarPosts.addEventListener('click',cargarApi);


function cargarApi(){
    // llamado objeto ajax
    const xhr = new XMLHttpRequest();

    // crear conexion
    xhr.open('GET','https://jsonplaceholder.typicode.com/posts',true);

    // cuando se lea esta parte hacemos una función

    xhr.onload = function(){
        if(this.status ===200){
           
        const posts = JSON.parse(this.responseText);
        let posthtml = '';
        posts.forEach(post => {
            posthtml += `
                <ul>
                    <li>UserId: ${post.userId}</li>
                    <li>id: ${post.id}</li>
                    <li>title: ${post.title}</li>
                    <li>body: ${post.body}</li>
                </ul>
            `;
            document.getElementById('listado').innerHTML = posthtml;
            
        });
        }
    }

    xhr.send();
}