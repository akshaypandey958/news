console.log('This is my index ');

let news = document.getElementById('news');

//Api parameters
let source = 'bbc-news';
let key = 'd7cdfaa335ef4af0891d271e511d8a96';

let xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${key}`, true);

xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        console.log(json);
        let art = json.articles;
        let str = "";
        art.forEach(element => {
            str += `<div class="col-md-6 my-3">
            <div class="h-100 p-5 text-white bg-dark rounded-3">
                <h2>${element["title"]}</h2>
                <p>${element["content"]}</p>
                <a class="btn btn-primary" href="${element["url"]}" role="button" target="_blank">Click to read More</a>
            </div>
            </div>`;
        });    
        news.innerHTML = str;
    }
    else {
        console.log('Error occured');
    }
}

xhr.send();
