let pagina = 1;
const btnanterior = document.getElementById("btnAnterior");
const btnsiguiente = document.getElementById("btnSiguiente");

btnsiguiente.addEventListener('click', () =>{
   if( pagina <10){
   pagina += 1;
    consumirAPI();}

});

btnanterior.addEventListener('click', () => {
    
   if(pagina >1) {pagina -= 1;
    consumirAPI();}
})


const consumirAPI = async () => {
    try{

    const API = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=3d3a17e41ba35772c4c8f684c8e84c9e&page=${pagina}`);
    console.log(API);


     if(API.status === 200){
    const datos = await API.json();

         let peliculas = ''
        datos.results.forEach(pelicula => {
           peliculas += 
           
           `<div class="pelicula">
           <img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
            <h3 class="titulo">${pelicula.title}</h3>
           </div>`
         
        }
            );
            document.getElementById('contenedor').innerHTML = peliculas;

        }else if(API.status === 401){
        console.log("choose another")

        }else if (API.status === 404){
            console.log("That movie doesn't exist")

        }else('You got an Error, reload')

}
     catch(error){
        console.log(error);
    }
   

}

consumirAPI();
