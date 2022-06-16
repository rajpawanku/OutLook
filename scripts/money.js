import {navBar} from "../components/navbar.js"
let n = document.getElementById("sbsbemaindiv")
n.innerHTML = navBar()


import {fooTer} from "../components/footer.js"
let f = document.getElementById("footermaindiv")
f.innerHTML = fooTer()


let cartdata = JSON.parse(localStorage.getItem('coffee')) || []

//let oldapi = "1f46a7379e934737ab1131d6fbc866f5"
let api = "c321f987cbcf4c3a82ac11664fd859dd"
let businesssearch = async () => {
  let res = await fetch(
    `https://newsapi.org/v2/everything?q=money&pageSize=30&apiKey=${api}`
  );

  let data = await res.json();

  console.log(data.articles);

  append(data.articles);
};
businesssearch()

let append = (data) => {
  let container = document.getElementById("search_div");
  container.innerHTML = null;
  data.forEach((el) => {
    

    let heading = document.createElement("div")
    heading.setAttribute("class","search_div_grid")
    

    let img = document.createElement("img");
    img.src = el.urlToImage;
    img.setAttribute("id", "image");
  
    let h3 = document.createElement("h3");
    h3.innerText = el.title;
    h3.style.textAlign="center"
    h3.setAttribute("id","h3")
    h3.addEventListener('click',function(){
      addtocart(el)
    })


    let p = document.createElement("p")
    p.innerText=el.content
    p.style.textAlign="center"
    p.setAttribute("class","P")

    heading.append(img,h3,p,)
    container.append( heading);
  });
  function addtocart(el){
    console.log(el)
    cartdata.push(el)
    localStorage.setItem('coffee',JSON.stringify(cartdata));
    window.location.href="fullnews.html"
    
}
};
