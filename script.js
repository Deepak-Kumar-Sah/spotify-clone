function scrollPosition(){
    const element = document.getElementById("right-section");
    let y=element.scrollTop;
    // console.log(y.toFixed());
   if(y.toFixed()>30){
  /* background-color: #121212; */
    
    document.getElementsByClassName("header")[0].style.backgroundColor="#121212";
   }else{
    document.getElementsByClassName("header")[0].style.backgroundColor="#090909";
   }
}
// document.getElementById("right-section").addEventListener('mouseenter',scrollBarShow);
// function scrollBarShow(){
//   // console.log("Hovering yeah!");
//   document.getElementById("right-section").style.overflowY="scroll";
  
// }
// document.getElementById("right-section").addEventListener('mouseleave',scrollBarLeave);
// function scrollBarLeave(){
//   setTimeout(hideScrollBar,3000);
// }
// function hideScrollBar(){
//   document.getElementById("right-section").style.overflowY="hidden";
//   // console.log("leaving yeah!");

// }