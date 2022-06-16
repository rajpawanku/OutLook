import {navBar} from "../components/navbar.js"
let n = document.getElementById("sbsbemaindiv")
n.innerHTML = navBar()

// let DATE = document.getElementById("date")
// DATE.innerHTML =  Date();


import {fooTer} from "../components/footer.js"
let f = document.getElementById("footermaindiv")
f.innerHTML = fooTer()

let form = document.getElementById('form')
form.onsubmit = function () {
    singnup(event)
}


let userData = function (m,p) {
    // this.title=title;
    // this.name = `${fn} ${ln}`
    this.mobile = m;
    this.pass = p;
}

let arr = JSON.parse(localStorage.getItem('user_details')) || []
function singnup(e) {
    e.preventDefault()
    // console.log('amit')
    // let title = document.getElementsByClassName('title')

    // for (let i = 0; i < title.length; i++) {
    //     if (title[i].checked) {
    //         let title = title[i].value
    //         // console.log(title)
    //     }
    // }

    // let first_name = form.name.value;
    let mobile = form.mobile.value;
    let pass = form.password.value;

    // let check_box= form.check_box.value
    // console.log(first_name,email,pass)
    let p1 = new userData(mobile, pass)
    // console.log(p1)
    arr.push(p1)
    // console.log(arr)
    // if (first_name == "" || last_name == "" || email == "" ) {
    //     alert('Please select * marks fild')
    // } 
    // else if(pass != confirm_pass){
    //     alert("password not matched")
    // }else{

        localStorage.setItem('user_details', JSON.stringify(arr))
        alert('Registration successful')
        // window.location.reload()
        window.location.href="login.html"
    



}