// Computer Science 30 Major Project, Advanced Web Design - Delbert Luo
// This file allows the user to click a button to toggle on a dark theme


var icon = document.getElementById("icon");

icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src = "https://www.iconpacks.net/icons/2/free-sun-icon-1846-thumb.png"
    }
    else{
        icon.src = "https://icones.pro/wp-content/uploads/2021/02/icone-de-la-lune-grise.png"
    }
}


console.log("test");
