const favBtns = document.querySelectorAll('.agregarFavoritos')

for (let favBtn of favBtns) {
    favBtn.addEventListener('click', async function(event) {

        const movie = {
            'idFavMovie':event.target.value
        }
    
        const data =  await fetch ('/api/mispeliculas/createFavMovie', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(movie),
        })

        if(data){
            console.log(data);
        }
})
}


