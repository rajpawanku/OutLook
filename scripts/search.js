import {navBar} from "../components/navbar.js"
let n = document.getElementById("sbsbemaindiv")
n.innerHTML = navBar()


import {fooTer} from "../components/footer.js"
let f = document.getElementById("footermaindiv")
f.innerHTML = fooTer()

// changing krna hai
//  let categories = document.getElementById("hover").children;
  
// for (let el of categories) {
//   el.addEventListener("click", hello);
// }

// function hello() {
//     searchImages(this.id);
//   }
     
  let search = (e) => {
    if (e.key === "Enter") {
      searchImages();
    }
  };
  
  document.getElementById("query").addEventListener("keydown", search);
  
  //const oldapi = "1f46a7379e934737ab1131d6fbc866f5"
  const api ="75a494b06688473f8c49b997fcc756d5"
  
  let cartdata = JSON.parse(localStorage.getItem('coffee')) || []

  let searchImages = async (q) => {
    let query = document.getElementById("query").value;
    if (q) {
      query = q;
    }
    //
    //https://newsapi.org/v2/top-headlines?country=${query}&apiKey=
    let res = await fetch(
      `https://newsapi.org/v2/everything?q=${query}&pageSize=30&apiKey=${api}`
    );
  
    let data = await res.json();
  
    console.log(data.articles);
    append(data.articles);
  };

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
      h3.setAttribute("id","h3")
      h3.addEventListener('click',function(){
        addtocart(el)
      })
    //   h3.style.textAlign="center"
  
       let p = document.createElement("p")
       p.innerText=el.content
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


  // Most Popular
  // let mostsearch = async () => {
  //   let res = await fetch(
  //     `https://newsapi.org/v2/everything?q=cricket&pageSize=4&apiKey=${api}`
  //   );
    
  //   let data = await res.json();
  
  //   console.log(data.articles);
  
  //  // appendmost(data.articles);
  // };
  
  // mostsearch()
  // let appendmost = (data) => {
  //   let container1 = document.getElementById("search_ke_bagalme");
  //   container1.innerHTML = null;
  //   data.forEach((el) => {
      
  //     let heading1 = document.createElement("div")
  //     heading1.setAttribute("class","search_ke_bagalme_grid")
  
  //     let img = document.createElement("img");
  //     img.src = el.urlToImage;
  //     img.setAttribute("class", "search_ke_bagalme_img");
    
  //     let h3 = document.createElement("h3");
  //     h3.innerText = el.title;
  //     h3.style.textAlign="center"
  //     h3.setAttribute("class", "search_ke_bagalme_h3");
  
  //     heading1.append(img,h3,)
  //     container1.append( heading1);
  //   });
  // };