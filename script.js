//your JS code here. If required.
const image = document.getElementsByTagName("img");
function makeAllOtherInActive(active){
    for(let i = 0; i<image.length;i++){
        if(i!=active){
            image[i].classList.remove("active");
            image[i].classList.add("pannel");
            image[i].nextElementSibling.classList.add("hidden");
            image[i].nextElementSibling.classList.remove("img-text");
        }
    }  
}

for(let i = 0; i<image.length;i++){
    image[i].addEventListener("click",(e)=>{
       image[i].classList.toggle("pannel");
       image[i].classList.toggle("active");
       image[i].nextElementSibling.classList.toggle("hidden");
       image[i].nextElementSibling.classList.toggle("img-text");
       makeAllOtherInActive(i);
    })
}