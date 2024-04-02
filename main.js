import { KEPEK } from "./adatok.js";
import { htmlOsszeAllit } from "./fuggvenyek.js";

/*1. feladat:  galéria kisképeinek elhelyezése */
/* fogd meg a .galeria elemet */
    const galeriaELEMEK = galeriaELEMEK.eq(0)
    console.log(galeriaELEMEK)
/* írd bele az összeálíltott html képsorozatot */
    galeriaELEMEK.html=htmlOsszeAllit(KEPEK)

/*2. feladat  A .nagykep divben lévő img elem megfogása */
    const nagykepIMGELEM = $(".nagykep img")
    console.log(nagykepIMGELEM)
/* A .nagykep div megfogása */
    const nagykepIMGELEM2 = $(".nagykep")[0]
    console.log(nagykepIMGELEM2)
/*3. feladat-  eseménykezelő hozzáadása a kisképekhez  */
/* Az előzőekben létrehozott kisképek megfogása (querySelectorAll) - ez egy lista lesz */
    const kisKEPELEMEK =$(".kep");

/* eseménykezelő hozzáadása a kisképekhez, ciklussal */
    for (let index = 0; index < kisKEPELEMEK.length; index++) {
        kisKEPELEMEK[index].on("click",function (event){
            console.log(event.target.src)
            aktIndex=index;
            nagykepIMGELEM.attr=event.target.src
            nagykepIMGELEM2.removeClass("rejtett")
        });
    
    }

/* Az eseménykezelő függvényében: ha a kisképre kattintunk, akkor a nagykép src attribútumát le kell cserélni a kiskép src attribútumában megadott elérési útvonalra  */
    let aktIndex=0;
    const jobbgomb = $(".jobb")
    jobbgomb.on("click",jobbra)
    const balgomb = $(".bal")
    balgomb.on("click", balra)


/* 4. feladat .bal és a .jobb gombokra kattintva léptessük a galériát */
    function jobbra() {
        aktIndex++;
        if (aktIndex>=KEPEK.length) {
            aktIndex=0;           
        }
        console.log(aktIndex)
        console.log(KEPEK[aktIndex].kep)
        nagykepIMGELEM.attr = KEPEK[aktIndex].kep
    }

    function balra() {
        aktIndex--;
        if (aktIndex<=KEPEK.length) {
            aktIndex=-1;           
        }
        console.log(aktIndex)
        console.log(KEPEK[aktIndex].kep)
        nagykepIMGELEM.attr = KEPEK[aktIndex].kep


    }

    const zarELEM =$(".zar button")
    zarELEM.on("click", function () {
    nagykepIMGELEM2.addClass("rejtett") 
        
    })