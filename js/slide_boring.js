let slides = document.querySelectorAll('#trending>.wraper>.slide');
let pos = 1;


function slider(n){
    slides.forEach((slide)=>{
          slide.style.display = "none";
    })
    pos++
    
    if(pos == slides.length){
        pos = 0;
    }
    if(pos < 0){
        pos = slides.length-1;
    }

    slides[pos].style.display = "block";
   
   
    setTimeout(slider,3000)
}

slider()
// function nextSlide(){
//     pos++;
// }
// function prevSlide(){
//     pos--;
// }
// next.onclick = function(){
//     nextSlide()
//     slider()
// }
// prev.onclick = function(){
//     prevSlide()
//     slider()
// }