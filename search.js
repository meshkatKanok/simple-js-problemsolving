let songs='sada sada kala kala rong jomaca sada kala';
let check=songs.toLocaleLowerCase().includes('Sada'.toLocaleLowerCase());
console.log(check)

let checkindex=songs.indexOf('kala');
if(checkindex !==-1){
    console.log("vaild")
}
else{
    console.log("not valid");
}
console.log(checkindex)

let checkstart=songs.startsWith('sada');
console.log(checkstart);

let chackend=songs.endsWith('a');
console.log(chackend)