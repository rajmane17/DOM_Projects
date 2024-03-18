const img_Url = document.querySelector("#image-url");
const generate_btn = document.querySelector("#generate-btn");
const meme_img = document.getElementById("meme-image");
const Author_name = document.getElementById("name")

function updateImg(url, Name) {
    meme_img.setAttribute("src", url);
    img_Url.innerHTML = url;

    Author_name.innerHTML = Name;

}


generate_btn.addEventListener("click", function(e){
    fetch("https://api.memegen.link/templates")
    .then((resp) => {resp.json()})
    .then((data)=> {
        
    })
})