const readBtn = document.getElementById("btn-read");
const textbtn = document.getElementById("text-read");
const ytbbtn = document.getElementById("circle")

readBtn.addEventListener('click',(e)=>{
    textbtn.classList.toggle("show-more")
    if(readBtn.innerText === "READ MORE"){
        readBtn.innerText ="Show less"
        readBtn.style.backgroundColor = "pink";
    }else{
        readBtn.innerText = "Read more"
        readBtn.style.backgroundColor = "whitesmoke";
    }
})

ytbbtn.addEventListener('click',(e)=>{
    window.open('https://www.google.com.br/')
})