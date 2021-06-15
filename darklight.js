var icon = document.getElementById("icon");

icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    localStorage.setItem("dark-theme", true)
    if(document.body.classList.contains("dark-theme")){
        icon.src = "https://www.iconpacks.net/icons/2/free-sun-icon-1846-thumb.png"
    }
    else{
        icon.src = "https://icones.pro/wp-content/uploads/2021/02/icone-de-la-lune-grise.png"
    }
}


console.log("test");
