window.
addEventListener('load',()=>{
  setTimeout(()=>{
    document
  .getElementById('cover').style.display="none";
   showApp();
  },3000) 
  document
  .getElementById('cover').style.display="flex";
     
}) 



function showApp(){
const getInputForm=document.getElementById('Input');
 
 getInputForm
 .addEventListener('input',
 (e)=>{
  const Event = e.target.value;
  const DispatchEvent =
    parseFloat(Event);
  const storageData =
  window.localStorage
  .setItem('data',DispatchEvent);
 });
 
 const Btn = document.getElementById('btn');
 
 Btn
   .addEventListener('click',
   ()=>{
    const getData = window
     .localStorage
     .getItem('data');
     const resultGetData = parseFloat(getData)
     result(resultGetData);
     //console.log( resultGetData);
   })

const UpdateWeb = document.getElementById('updateWeb');

UpdateWeb
.addEventListener('click',()=>{
  window.location.reload();
  clear(0);
}) 

const Btn2=document.getElementById('btn2')
.addEventListener('click',()=>{
  const EraseDate=window.localStorage.removeItem('data');
  clear(EraseDate);
  })


function result(param){
  var fact = 1; 
  while (param > 1) { 
    fact *= param; 
    param--; 
  } 
 document
 .getElementById('screen')
 .innerHTML=fact; 
}
const clear=(er)=>{
 const Er=er;
 if(Er){
 document
 .getElementById('screen')
 .innerHTML=Er;
   
 }
 else{
  document
    .getElementById('screen')
    .innerHTML = 0;
 }
}
}

