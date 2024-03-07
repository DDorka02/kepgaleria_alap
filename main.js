import { KEPEK } from "./adatok.js";
import { htmlOsszeAllit } from "./fuggvenyek.js";

/*1. feladat:  galéria kisképeinek elhelyezése */
/* fogd meg a .galeria elemet */
    const galeriaELEMEK = document.getElementsByClassName("galeria")[0]
    console.log(galeriaELEMEK)
/* írd bele az összeálíltott html képsorozatot */
    galeriaELEMEK.innerHTML=htmlOsszeAllit(KEPEK)

/*2. feladat  A .nagykep divben lévő img elem megfogása */
    const nagykepIMGELEM = document.querySelector(".nagykep img")
    console.log(nagykepIMGELEM)
/* A .nagykep div megfogása */
    const nagykepIMGELEM2 = document.getElementsByClassName("nagykep")[0]
    console.log(nagykepIMGELEM2)
/*3. feladat-  eseménykezelő hozzáadása a kisképekhez  */
/* Az előzőekben létrehozott kisképek megfogása (querySelectorAll) - ez egy lista lesz */
    const kisKEPELEMEK = document.querySelectorAll(".kep");

/* eseménykezelő hozzáadása a kisképekhez, ciklussal */
    for (let index = 0; index < kisKEPELEMEK.length; index++) {
        kisKEPELEMEK[index].addEventListener("click",function (event){
            console.log(event.target.src)
            aktIndex=index;
            nagykepIMGELEM.src=event.target.src
            nagykepIMGELEM2.classList.remove("rejtett")
        });
    
    }

/* Az eseménykezelő függvényében: ha a kisképre kattintunk, akkor a nagykép src attribútumát le kell cserélni a kiskép src attribútumában megadott elérési útvonalra  */
    let aktIndex=0;
    const jobbgomb = document.querySelector(".jobb")
    jobbgomb.addEventListener("click",jobbra)
    const balgomb = document.querySelector(".bal")
    balgomb.addEventListener("click", balra)


/* 4. feladat .bal és a .jobb gombokra kattintva léptessük a galériát */
    function jobbra() {
        aktIndex++;
        if (aktIndex>=KEPEK.length) {
            aktIndex=0;           
        }
        console.log(aktIndex)
        console.log(KEPEK[aktIndex].kep)
        nagykepIMGELEM.src = KEPEK[aktIndex].kep
    }

    function balra() {
        aktIndex--;
        if (aktIndex<=KEPEK.length) {
            aktIndex=-1;           
        }
        console.log(aktIndex)
        console.log(KEPEK[aktIndex].kep)
        nagykepIMGELEM.src = KEPEK[aktIndex].kep


    }

    const zarELEM =document.querySelector(".zar button")
    zarELEM.addEventListener("click", function () {
    nagykepIMGELEM2.classList.add("rejtett") 
        
    })