const favBtns = document.querySelectorAll('.agregarFavoritos')

// async function(){
//     const movie = await fetch (`/api/search/details/${id}`)
// }

for (let favBtn of favBtns) {
    favBtn.addEventListener('click', async function(event) {

        console.log(event.target.value);
        console.log('holi');
        // const idFav = document.querySelector("article.datosLista > div:nth-child(2) > button").value; // value tt0133093
        // const idFav = document.getElementById().value; // value tt0133093
    
        const movie = {
            'idFavMovie':event.target.value
        }
    
        const data =  await fetch ('/api/mispeliculas/createFavMovie', {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(movie), // body data type must match "Content-Type" header}
    }
    )
})
}


