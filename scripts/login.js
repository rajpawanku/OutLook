import {navBar} from "../components/navbar.js"
let n = document.getElementById("sbsbemaindiv")
n.innerHTML = navBar()

// let DATE = document.getElementById("date")
// DATE.innerHTML =  Date();


import {fooTer} from "../components/footer.js"
let f = document.getElementById("footermaindiv")
f.innerHTML = fooTer()


let singnupData=JSON.parse(localStorage.getItem('user_details'))
// console.log(singnupData)

document.getElementById('btn').addEventListener('click',loginData)

 function loginData(){

    let mobile= document.getElementById('mobile').value;
    let pass= document.getElementById('password').value;

    let count=0
    if(singnupData==null){
        alert('no data available')
    }else{
    for(let i=0; i<singnupData.length; i++){
        if(singnupData[i].mobile==mobile && singnupData[i].pass==pass){
            count++
            break;
        }
    }
    if(count>0){
        alert('login successful')
        window.location.href='./index.html'
    }else{
        alert('Invalid credential')
        window.location.reload()
    }
}
}