
//import Router from '../src/router/router.js';

let alire = document.getElementById("alire")
let lu = document.getElementById("lu")
let ajouter = document.getElementById("ajouter")
document.getElementById('add').addEventListener('click', function () {

    let lien = document.getElementById("lien").value;
    let titre = document.getElementById("titre").value;

    if (lien==""|| titre==""){
        alert("Les deux champs doivent etre rempli");
    }
    else{
        document.getElementById("titre1").style.visibility="visible";
        document.getElementById("titre2").style.visibility="hidden";        
        document.getElementById("pretexte").style.visibility="hidden";
        alire.insertAdjacentHTML("afterbegin",`<li>${titre}<i id=${titre} class="fas fa-check" onClick=marquerLu(this.id)></i><i id=${titre} onClick=supprimer(this.id) class="fas fa-trash-alt"></i><a href=${lien} target="blank"><i class="fas fa-shopping-cart"></i></a></li>`);

    }

})

function supprimer(id) {

    document.getElementById(id).parentElement.outerHTML = "";

}

function marquerLu(id) {
    document.getElementById("titre1").style.visibility = "hidden";
    document.getElementById("titre2").style.visibility = "visible";
    
    supprimer(id)
    lu.insertAdjacentHTML("afterbegin", `<li>${id}</i><i class="fas fa-trash-alt"" id=${id} onClick=supprimer(this.id)></i></li>`);    
}
  


localStorage.setItem("titre", "Start With Why");
localStorage.setItem("lien", "https://www.amazon.fr/Start-Why-Leaders-Inspire-Everyone-ebook/dp/B005JZD3B4/ref=lp_841717031_1_6");

console.log(localStorage.getItem("titre"));
console.log(localStorage.key(1));
console.log(localStorage.key(2));

/*
const inpKey = document.getElementById("inpKey");
const inpValue = document.getElementById("inpValue");
const btnInsert = document.getElementById("btnInsert");
const lsOuput = document.getElementById("lsOuput");

/*btnInsert.onclick = function (id) {

    const key = inpKey.value;
    //const key = inpValue.value;
    

   // console.log(key);
   // console.log(value);


    if (key && value) {
        localStorage.setItem(key,   value);

        location.reload();
    }
};

    for (let i = 0; i < localStorage.length; i++) {

        const key = localStorage.key(i);
        const value = localStorage.getItem(key);

        lsOuput.innerHTML += `${key}: ${value}<br />`;
    }
*/

const router = new Router({
    mode: 'hash',
    root: '/'
});

router
    .add(/about/, () => {
        alert('welcome in about page');
    })
    .add(/products\/(.*)\/specification\/(.*)/, (id, specification) => {
        alert(`products: ${id} specification: ${specification}`);
    })
    .add('', () => {
        // general controller
        console.log('welcome in catch all controller');
    });

let username = document.getElementById("username");
let password = document.getElementById("password");

localStorage.setItem("username", "kaiti");
localStorage.setItem("username", "lili");
localStorage.setItem("username", "jj");
localStorage.setItem("password", "1234");
localStorage.setItem("password", "1345");
localStorage.setItem("password", "7890");



console.log(localStorage.getItem("username"));
console.log(localStorage.getItem("password"));
console.log(localStorage.key(1));
console.log(localStorage.key(2));
console.log(localStorage.key(3));
console.log(localStorage.key(4));
console.log(localStorage.key(5));
console.log(localStorage.key(6));

const admin = [
    "hj",
    1256,
];

const myJSON = JSON.stringify(admin);
document.getElementById("test").innerHTML = myJSON;

//(authentificator, Json.stringify([username, password]);