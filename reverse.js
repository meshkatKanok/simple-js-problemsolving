// let sentence='i am a bad boy';
// for(let i=sentence.length-1;i>=0;i--){
//     console.log(sentence[i]);
// }
function cheeckreverse(sentence){
    let newrev='';
    for(let i=sentence.length-1;i>=0;i--){
       newrev=newrev + sentence[i];
    }
return newrev ;
}
const sentence1='i am a bad boy';
const chekre=cheeckreverse(sentence1);
console.log(chekre);