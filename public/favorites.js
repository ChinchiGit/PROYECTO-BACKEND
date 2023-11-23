const favBtn = document.querySelector('.agregarFavoritos')

const movie = {
    'id_movie': '40f81110-87ba-11ee-84fa-91e9f718b7c4',
    'id_user': '40f81110-87ba-11ee-84fa-91e9f718b7c4',
    'api_film': true
}

favBtn.addEventListener('click', async function(event) {
    //console.log('holi');
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
//console.log(data.json());
})