const puppeteer = require('puppeteer')

/** 
* @async
* @method getReviews
* @description for finding review comments in imdb
* @param id alphanumeric string that corresponds to imdb inernals id
* @returns array of comments type string or error string
* @example scraper.getReviews('tt9140554')
*/
const getReviews = async (id) => {
    try {
        //url a la que le voy a hacer scrap
        url = `https://www.imdb.com/title/${id}/reviews/`

        //objeto para guardar lo obtenido
        let golosinas = []
        
        //abrimos una instancia del navegador
        const browser = await puppeteer.launch();

        //abrimos una nueva pestaña
        const page = await browser.newPage();
        
        //vamos a la url necesaria
        await page.goto(url)

        //selecionamos los contenedores de las reviews
        let reviews = await page.$$('.imdb-user-review')

        //recortamos a 3 reviews
        reviews = reviews.splice(0,3)

        //itermaos en ellos 
        for (const el of reviews) {
            //almacenamos en objeto solo el texto
            golosinas.push(await el.$eval('.text', (element) => {
                return element.innerHTML ;
            }))
        }

        // Cerramos navegador.
        await browser.close();

        //retornamos lo scrapeado
        return golosinas

    } catch (error) {
        //algo no funciona ok
        console.log("Error:", error);
        return "Error: " + error.toString();
    }
}

module.exports = { getReviews }