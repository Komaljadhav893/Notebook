const lines=document.querySelectorAll(".line")
const button=document.getElementsByClassName("btn")[0]
let save=false;
const saveEdit=()=>{
 if(save){
 button.innerHTML='Edit';
 save=false
 }else{
  button.innerHTML='save'
  save=true
 }
 button.classList.toggle("edit-btn");
 
 LineControls();
}
button.addEventListener("click",saveEdit);

const LineControls=()=>{
  lines.forEach(line =>{
  if(!save){
    line.setAttribute("disabled",true)
  }else{
    line.setAttribute("disabled",false)
  }
  // line.setAttribute("maxlength",line.offsetWidt/12);
});
}
etLineMaxWidth();
const setLineMaxWidth=()=>{
  lines.forEach(line =>{

    line.setAttribute("maxlength",line.offsetWidt/12);
  });
}
button.addEventListener("click",saveEdit);
window.addEventListener("resize",setLineMaxWidth)
LineControls();
