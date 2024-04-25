
function toss(name){
    var result =document.querySelector('.result');
    var img=document.querySelector('.img');
    img.innerHTML='';
    result.innerHTML='';
    
  let random = Math.round(Math.random()+1);
  if (random===1) {
    random='masjid';
    img.innerHTML+=`<img src="./alif.jpeg" />`;
  }
  else{
    random='chand';
    img.innerHTML+=`<img src="./download.jpeg" />`;

  }
  if (name===random) {
    result.innerHTML+='You win';
  }
  else{
    result.innerHTML+='you lose';
  }
  console.log(random)
}