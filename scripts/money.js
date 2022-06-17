import {navBar} from "../components/navbar.js"
let n = document.getElementById("sbsbemaindiv")
n.innerHTML = navBar()


import {fooTer} from "../components/footer.js"
let f = document.getElementById("footermaindiv")
f.innerHTML = fooTer()

import {APISEARCH,append} from "../components/api.js"
let url = "https://newsapi.org/v2/everything?q=money&pageSize=30&apiKey="

 let data =await  APISEARCH(url,"c321f987cbcf4c3a82ac11664fd859dd")
//console.log("data",data);
 let container = document.getElementById("search_div");
 append(data,container)
