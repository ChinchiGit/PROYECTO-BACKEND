const dotenv = require('dotenv');

dotenv.config();


async function getFetch(title){
    let endPoint = `https://www.omdbapi.com/?s=${title}&apikey=${process.env.API_KEY}`;
    let res = await fetch(endPoint)
        .then(response => response.json())
        .then(data => data);
    res.title = res.Title
    if(res.Response == 'False'){
        return null;
    }else{
        return res
    }    

};


async function getDetailsFetch(id){
    let endPoint = `https://www.omdbapi.com/?i=${id}&apikey=${process.env.API_KEY}`;
    let res = await fetch(endPoint)
        .then(response => response.json())
        .then(data => data);
    if(res.Response == 'False'){
        return null;
    }else{
        return res
    }    

};


module.exports = {
    getFetch,
    getDetailsFetch
}