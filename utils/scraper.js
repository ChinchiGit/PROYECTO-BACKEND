const puppeteer = require('puppeteer')

/** 
* async method for finding review comments in imdb
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
        const reviews = await page.$$('.imdb-user-review')

        //itermaos en ellos 
        for (const el of reviews) {
            //y cojemos el contenido de su elemento clase text
            const textos = await el.$eval('.text', (element) => {
                return element.innerHTML;
            })
            //almacenamos en objeto
            golosinas.push(textos)
        }

        //print para development
        // golosinas.map((g,i)=> {
        //     console.log(`--------review ${i+1}--------`);
        //     console.log(g);
        //     console.log("----------------");
            
        // })

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