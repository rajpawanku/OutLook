import {navBar} from "../components/navbar.js"
let n = document.getElementById("sbsbemaindiv")
n.innerHTML = navBar()


import {fooTer} from "../components/footer.js"
let f = document.getElementById("footermaindiv")
f.innerHTML = fooTer()

const api ="75a494b06688473f8c49b997fcc756d5"
let mostsearch = async () => {
  let res = await fetch(
    `https://newsapi.org/v2/everything?q=popular&pageSize=4&apiKey=${api}`
  );
  
  let data = await res.json();

  console.log(data.articles);

  appendmost(data.articles);
};

mostsearch()
let appendmost = (data) => {
  let container1 = document.getElementById("search_ke_bagalme");
  container1.innerHTML = null;
  data.forEach((el) => {
    
    let heading1 = document.createElement("div")
    heading1.setAttribute("class","search_ke_bagalme_grid")

    let img = document.createElement("img");
    img.src = el.urlToImage;
    img.setAttribute("class", "search_ke_bagalme_img");
  
    let h3 = document.createElement("h3");
    h3.innerText = el.title;
    h3.style.textAlign="center"
    h3.setAttribute("class", "search_ke_bagalme_h3");

    heading1.append(img,h3,)
    container1.append( heading1);
  });
};



let cartdata = JSON.parse(localStorage.getItem('coffee'))
console.log(cartdata)

let container = document.getElementById("news_div")

cartdata.map(function(el){
    let div = document.createElement('div')

    let h3 = document.createElement("h1");
    h3.innerText = el.title;
    h3.setAttribute("id","h3")
  //   h3.style.textAlign="center"

    let img = document.createElement('img')
    img.src=el.urlToImage;
    img.setAttribute('class','img')
    
     let p = document.createElement("p")
     p.innerText=el.content
     p.setAttribute("class","P")
    

    div.append(h3,img,p)
    container.append(div)
 })



 // Most Popular
