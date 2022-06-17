

 let APISEARCH = async (url,api) => {

        let res = await fetch(

          `${url}${api}`
        );
      
        let data = await res.json();
      
        //console.log(data.articles);
      
        return data.articles
      };

      let cartdata = JSON.parse(localStorage.getItem('coffee')) || []
      
      let append = (data,parentdiv) => {
       // let container = document.getElementById("search_div");
        parentdiv.innerHTML = null;
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
          parentdiv.append( heading);
        });
        function addtocart(el){
          console.log(el)
          cartdata.push(el)
          localStorage.setItem('coffee',JSON.stringify(cartdata));
          window.location.href="fullnews.html"
          
      }
      };
      
export{APISEARCH,append}
    //   let url = "https://newsapi.org/v2/everything?q=business&pageSize=30&apiKey="
    //   APISEARCH(url,"c321f987cbcf4c3a82ac11664fd859dd")
