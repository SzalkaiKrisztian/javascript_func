const szam=1//globális válzozo- minden eléri 
valami1()
/**
 * csak kiir valam1 jodolgot
 * 
 *  nsdasdad
 * @returns {void}
 */
function valami1(){
    console.log("valami1")
}
/**
 * valami2 kilogolja a globalis scopeon lévő szám változót
 * 
 * ha van dolga akor az 
 * @returns {void}
 */
function valami2(){
    console.log(szam)
}
valami2()
/**
 * 
 * 
 * @returns {void}
 */
function valami3(){
    let szam1 =3;
    console.log(szam1)
}
valami3()

/**
 * 
 * @param {number} parameter 
 *  @returns {number}
 */
function valami4(parameter){
    console.log(parameter)
    /**
     * @type {number}
     */
    let valtozo=1;
    let osszeg = valtozo + parameter
    return osszeg;
}
const a = valami4(4)
console.log(a)