const mainheading=document.querySelector('#main-heading');
mainheading.style.textAlign='center';
const fruits=document.querySelector('.fruits');
fruits.style.backgroundColor='grey';
fruits.style.padding='30px';
fruits.style.margin='30px';
fruits.style.width='50%';
fruits.style.borderRadius='5px';
fruits.style.listStyleType='none';
const basketHeading=document.querySelector('h1');
basketHeading.style.marginleft='30px';
const heading=document.querySelector('#basket-heading');
heading.style.color='brown';
const fruititems=document.querySelectorAll('.fruit');
for(let i=0;i<fruititems.length;i++){
  if(i%2==0){
  fruititems[i].style.backgroundColor='white'}
  else{fruititems[i].style.backgroundColor='brown'
      fruititems[i].style.color='white'}
  
}
 
 