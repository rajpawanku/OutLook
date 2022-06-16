
import {navBar} from "../components/navbar.js"
let n = document.getElementById("sbsbemaindiv")
n.innerHTML = navBar()

// let DATE = document.getElementById("date")
// DATE.innerHTML =  Date();


import {fooTer} from "../components/footer.js"
let f = document.getElementById("footermaindiv")
f.innerHTML = fooTer()

// let input = document.getElementById("query")
// if(input =="ENTER"){
//   window.location.href="search.html"
// }

let api = "1f46a7379e934737ab1131d6fbc866f5"
let bitcoinsearch = async () => {
  //https://newsapi.org/v2/top-headlines?country=${query}&apiKey=
  let res = await fetch(
    `https://newsapi.org/v2/everything?q=bitcoin&pageSize=4&apiKey=${api}`
  );

  let data = await res.json();

  console.log(data.articles);

  append(data.articles);
};
bitcoinsearch()

let append = (data) => {
  let container = document.getElementById("CRYPTO_CORNER");
  container.innerHTML = null;
  data.forEach((el) => {
    
    let heading = document.createElement("div")
    heading.setAttribute("class","CRYPTO_CORNER_grid")
    

    let img = document.createElement("img");
    img.src = el.urlToImage;
    img.setAttribute("class", "image");
  
    let h3 = document.createElement("h3");
    h3.innerText = el.title;
    h3.style.textAlign="center"


    let p = document.createElement("p")
    p.innerText=el.content
    p.style.textAlign="center"
    p.style.fontSize="16px"

    heading.append(img,h3,p,)
    container.append( heading);
  });
};


// Culture append
let culturesearch = async () => {
  //https://newsapi.org/v2/top-headlines?country=${query}&apiKey=
  let res = await fetch(
    `https://newsapi.org/v2/everything?q=culture&pageSize=8&apiKey=${api}`
  );
  
  let data = await res.json();

  console.log(data.articles);

  appendculture(data.articles);
};

culturesearch()
let appendculture = (data) => {
  let container1 = document.getElementById("CULTURE");
  container1.innerHTML = null;
  data.forEach((el) => {
    
    let heading1 = document.createElement("div")
    heading1.setAttribute("class","CULTURE_AND_SOCIETY")

    let img = document.createElement("img");
    img.src = el.urlToImage;
    img.setAttribute("class", "image");
  
    let h3 = document.createElement("h3");
    h3.innerText = el.title;
    h3.style.textAlign="center"

    let p = document.createElement("p")
    p.innerText=el.content
    p.style.textAlign="center"
    p.style.fontSize="16px"

    heading1.append(img,h3,p,)
    container1.append( heading1);
  });
};


// World News
let worldsearch = async () => {
  //https://newsapi.org/v2/top-headlines?country=${query}&apiKey=
  let res = await fetch(
    `https://newsapi.org/v2/everything?q=world&pageSize=8&apiKey=${api}`
  );
  
  let data = await res.json();

  console.log(data.articles);

  appendworld(data.articles);
};

worldsearch()
let appendworld = (data) => {
  let container1 = document.getElementById("WORLD");
  container1.innerHTML = null;
  data.forEach((el) => {
    
    let heading1 = document.createElement("div")
    heading1.setAttribute("class","WORLDNEWS")

    let img = document.createElement("img");
    img.src = el.urlToImage;
    img.setAttribute("class", "image");
  
    let h3 = document.createElement("h3");
    h3.innerText = el.title;
    h3.style.textAlign="center"

    let p = document.createElement("p")
    p.innerText=el.content
    //description
    // p.setAttribute("class","CRYPTO_CORNER_grid")

    p.style.textAlign="center"
    p.style.fontSize="16px"

    heading1.append(img,h3,p,)
    container1.append( heading1);
  });
};

// Sports
let sportsearch = async () => {
  //https://newsapi.org/v2/top-headlines?country=${query}&apiKey=
  let res = await fetch(
    `https://newsapi.org/v2/everything?q=cricket&pageSize=8&apiKey=${api}`
  );
  
  let data = await res.json();

  console.log(data.articles);

  appendsport(data.articles);
};

sportsearch()
let appendsport = (data) => {
  let container1 = document.getElementById("SPORT");
  container1.innerHTML = null;
  data.forEach((el) => {
    
    let heading1 = document.createElement("div")
    heading1.setAttribute("class","sports")

    let img = document.createElement("img");
    img.src = el.urlToImage;
    img.setAttribute("class", "image");
  
    let h3 = document.createElement("h3");
    h3.innerText = el.title;
    h3.style.textAlign="center"

    let p = document.createElement("p")
    p.innerText=el.content
    p.style.textAlign="center"
    p.style.fontSize="16px"

    heading1.append(img,h3,p,)
    container1.append( heading1);
  });
};