const inputBox = document.querySelector("#input-box");
const listContainer = document.querySelector("#list-container")

function addTask(){
    if(inputBox.value == ""){
        alert("Please Enter Something")
    }else {
        const li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
    }
    inputBox.value = "";
    saveData()
}

listContainer.addEventListener("click", function(e){

    if(e.target.tagName == "LI"){
        e.target.classList.toggle("checked");
        saveData()
    }else if ( e.target.tagName == "span"){
        e.target.parentElement.remove()
        saveData()
    }
}, false);

// ye function data ko save rakhega 
function saveData(){
    localStorage.setItem("Data", listContainer.innerHTML);
}

// ye function jb hum refresh karte hai tb sare data ko vapis display karneka kam karta hai
function Display(){
    listContainer.innerHTML = localStorage.getItem("Data");
}

Display();