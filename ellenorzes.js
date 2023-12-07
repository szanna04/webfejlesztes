alert("Telefonos nézetben a mindhárom galéria horizontális görgetéssel tekinthetők meg!");




$(document).ready(function(){
    $("#myform").validate({
        rules: {
            nev: "required",
            email: {
                required: true,
                email: true
            },
            mobil: {
                required: true,
                minlength: 11,
            },
            jelszo: {
                required: true,
                minlength: 12,
            },
        },

        messages: {
            nev: "Kérlek, add meg a neved/felhasználóneved!",
            email: {
                required: "Kérlek, add meg az e-mail címedet!",
                email: "Kérlek, létező e-mail címet adj meg!"
                },
            mobil: "Kérlek, add meg a telefonszámodat!",
            jelszo: {
                required: "Kérlek, add meg a jelszavad!",
                minlength: "A jelszó minimum 12 karakterből kell, hogy álljon!"
            }
            el: "Kérlek, fogadd el a feltételeinket!",
        },

    });
    });














document.getElementById("mybutton").addEventListener("click",ellenoriz)

function ellenoriz() {

    let pontszam = 0;

    const a = document.getElementById("verb").checked;
    const b = document.getElementById("csok").unchecked;

    if (a==1){pontszam = pontszam + 1;}

    if (document.getElementById("datum").value=='2024-03-17') {pontszam = pontszam + 1;}

    let a = document.getElementById("tavaszi").checked;
    let b = document.getElementById("oszi").unchecked;
    let c = document.getElementById("eszaki").unchecked;
    let d = document.getElementById("diszitsd").unchecked;
    let e = document.getElementById("vintage").checked;
    let f = document.getElementById("terr").checked;
    let g = document.getElementById("ballagasi").unchecked;
    if (a==1 && b==1 && c==0 && d==1 && e==1 && f==0 && g==0) {pontszam = pontszam + 1;}

    if (document.getElementById("egy").value=='solidus')  {pontszam = pontszam + 1;}

    if (document.getElementById("jo").checked==1) {pontszam = pontszam + 1;}

    if (document.getElementById("helyes").checked==1) {pontszam = pontszam + 1;} 
   

    if (pontszam>=3) {
        alert("Gratulálok! Igazán értesz a virágokhoz és a honlapon isjól kiismered már magad! Az elért pontszámod: ${pontszam} pont`)
    }
}