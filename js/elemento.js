let url = 'https://jsonplaceholder.typicode.com/users';


async function actualizarAPI(url){
    let datos = await fetch(url); // la función api_url
    let dato = await datos.json(); 
    cargar_contenido(dato);
}
actualizarAPI(url);

function cargar_contenido(data){
    let dom = document.querySelector(".main");
    data.forEach(element => {
  
      let item = document.createElement("div");
      item.classList.add("elemento")  
      item.innerHTML = `

        <div class="component">
            <img src="https://img.freepik.com/iconos-gratis/usuario_318-504048.jpg?w=360" alt="">
            
            <h2>${element.name}</h2>
            <div class="componentes">
                <p>Email: ${element.email}</p>
                <p>Phone: ${element.phone}</p>
                <p>Company: ${element.company.name}</p>
            </div>
        </div>

      `;
    dom.appendChild(item);
})};