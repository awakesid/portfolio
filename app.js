const clip=document.querySelectorAll('.clip');
const whitelogo=document.getElementById('wh');
const head=document.querySelectorAll("h1");
for(let i=0; i<clip.length; i++){
    clip[i].addEventListener('click', function(){
        clip[i].play()
        whitelogo.style.visibility="hidden";
    })
    clip[i].addEventListener('mouseenter', function(){
        clip[i].play()
        whitelogo.style.visibility="hidden";
        document.querySelector(".top").style.visibility="visible";
        document.querySelector(".bottom").style.visibility="visible";
        document.querySelector(".eng").style.visibility="visible";
    })
    clip[i].addEventListener('mouseout', function(){
        clip[i].pause()
       whitelogo.style.visibility="visible";
       document.querySelector(".top").style.visibility="hidden";
       document.querySelector(".bottom").style.visibility="hidden";
       document.querySelector(".eng").style.visibility="hidden"; 
    })
    for(let j=0; j<head.length; j++){
    head[j].addEventListener('mouseenter',function(){
        clip[i].play()
        whitelogo.style.visibility="hidden";
        document.querySelector(".top").style.visibility="visible";
        document.querySelector(".bottom").style.visibility="visible";
        document.querySelector(".eng").style.visibility="visible";
        
    })}

    document.querySelector("h3").addEventListener('mouseenter',function(){
        clip[i].play()
        whitelogo.style.visibility="hidden";
        document.querySelector(".top").style.visibility="visible";
        document.querySelector(".bottom").style.visibility="visible";
        document.querySelector(".eng").style.visibility="visible";
        clip[i].style.opacity="1";
        
    })
    
}
