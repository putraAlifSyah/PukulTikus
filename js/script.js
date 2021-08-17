// tangkap element element HTML
const tanah=document.querySelectorAll(".tanah")
const tikus=document.querySelectorAll(".tikus")
const papanskor=document.querySelector("h2")
const pop = document.querySelector('#pop');
const kesulitan=document.querySelector(".kesulitan")

let tanahSebelumnya;
let selesai;
let skor;
function tanahRandom(tanah){
    let acak=Math.floor(Math.random()*6) //mendapatkan nilai acak
    let tRandom=tanah[acak] //mengambil tanah sesuai index acak
    if (tanahSebelumnya==tRandom) {
        tanahRandom(tanah)
    }
    tanahSebelumnya==tRandom;
    return tRandom
}

function waktuRandom(min, max){
    let wRandom=Math.round(Math.random()*(max - min) + min)
    return wRandom
}

function munculkanTikus(){
    let tRandom=tanahRandom(tanah)
    let max;
    kesulitan.value=="Mudah"?max=1000:kesulitan.value=="Normal"?max=700:kesulitan.value=="Sulit"?max=500:0;
    // console.log(max)
    let wAcak=waktuRandom(300,max)
    tRandom.classList.add("muncul")
    setTimeout(() => {
        tRandom.classList.remove("muncul")
        if (!selesai) {
            munculkanTikus()
        }
    }, wAcak);
}

function mulai(){
    selesai=false;
    skor=0;
    papanskor.innerHTML="Skor: 0";
    munculkanTikus()
    setTimeout(() => {
        selesai=true
    }, 10000);
}


tikus.forEach(t=>{
    t.addEventListener('click', function(){
        skor++
        pop.play() 
        papanskor.innerHTML=`Skor: ${skor}`
        this.parentNode.classList.remove("muncul")
    })
})