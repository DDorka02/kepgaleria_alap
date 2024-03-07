export function htmlOsszeAllit(lista) {
    //txt összeállítása
    let txt =""
    for (let index = 0; index < lista.length; index++) {
        const element= lista[index];
        console.log(element)
        txt += `<div class="kep"><img src="${element.kep}" alt="${element.cim}"> </div>`
}
console.log(txt)
return txt

}
