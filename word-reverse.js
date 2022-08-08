function wordReverse(str){
 
 const makeWord=str.split(' ');
 const adword=[];
  for(let i=makeWord.length-1;i>=0;i--){
       adword.push(makeWord[i])
}
 const join=adword.join(' ');
 return join;
}
const wordarr='i am a bad boy';
const checkword=wordReverse(wordarr);
console.log(checkword);