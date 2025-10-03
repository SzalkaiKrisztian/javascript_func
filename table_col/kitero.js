/** 
 *@type{string}
*/
const bumm = "3, 2, 1, bumm ..."
console.log(bumm)
const b=["egy","kettő","három"]
for(let i=0;i<b.length;i++){
    console.log(b[i])
}
console.log(b[1])
//while(){}
//do {
    
//} while ();
for(const a of b){
    console.log(a)
}
for(const key in b){
    console.log(`${key}: ${b[key]}`)
}
/**@type {{name:string,age:number}} */
const objektum={
    name : "krisztian",
    age : 17
}
for(const key in objektum){
    console.log(objektum[key])
}