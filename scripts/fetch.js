

// // changing krna hai
//  //let categories = document.getElementById("categories").children;
  
// // for (let el of categories) {
// //   el.addEventListener("click", hello);
// // }

// function hello() {
//     searchImages(this.id);
//   }
     
//   let search = (e) => {
//     if (e.key === "Enter") {
//       searchImages();
//     }
//   };
  
//   document.getElementById("query").addEventListener("keydown", search);
  
//   const api = "1f46a7379e934737ab1131d6fbc866f5"
  
//   let searchImages = async (q) => {
//     let query = document.getElementById("query").value;
//     if (q) {
//       query = q;
//     }
//     //
//     //https://newsapi.org/v2/top-headlines?country=${query}&apiKey=
//     let res = await fetch(
//       `https://newsapi.org/v2/everything?q=${query}&pageSize=4&apiKey=${api}`
//     );
  
//     let data = await res.json();
  
//     console.log(data.articles);
  
//     append(data.articles);
//   };
//   //searchImages()
  
//   let append = (data) => {
//     let container = document.getElementById("CRYPTO_CORNER");
//     container.innerHTML = null;
//     data.forEach((el) => {
      
//       let heading = document.createElement("div")
//       heading.setAttribute("class","CRYPTO_CORNER_grid")
  
//       //let title = document.createElement("div");
//       //title.setAttribute("class","CRYPTO_CORNER_grid")
  
//      // let author = document.createElement("div");
//       //author.setAttribute("class","CRYPTO_CORNER_grid")
  
//      // let image = document.createElement("div");
//      // image.setAttribute("class","CRYPTO_CORNER_grid")
   
      
//       let img = document.createElement("img");
//       img.src = el.urlToImage;
//       img.setAttribute("class", "image");
    
//       let h3 = document.createElement("h3");
//       h3.innerText = el.title;
//       h3.style.textAlign="center"
//       // h3.setAttribute("class","CRYPTO_CORNER_grid")
  
//       let p = document.createElement("p")
//       p.innerText=el.content
//       //description
//       // p.setAttribute("class","CRYPTO_CORNER_grid")
  
//       p.style.textAlign="center"
//       p.style.fontSize="16px"
  
//       let p1 = document.createElement("p")
//       p1.innerText =el.publishedAt
//       p1.style.textAlign="center"
//       p1.setAttribute("class","CRYPTO_CORNER_grid")
      
     
      
  
//       heading.append(img,h3,p,)
//       // title.append(p)
//       // author.append(p1)
//       // image.append(img)
//       //div.append(img,p1,p);
//       container.append( heading);
//     });
//   };